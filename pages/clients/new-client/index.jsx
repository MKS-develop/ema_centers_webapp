import React, {useState, useEffect} from 'react'
import firebase from '../../firebase/config'
import {Link} from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

function IndexPage() {

    const [btnMessage, setBtnMessage] = useState("Crear paciente");
    const [user, setUser] = useState({})
    
    const [error, setError] = useState(false)
    const [sp, setShowPassword] = useState(false)
    const [emessage, setEmessage] = useState("")
    const hiddenFileInput = React.useRef(null);
    
    const [services, setServices] = useState([])
    const [service, setService] = useState({})

    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    const [src, setImg] = useState('');
    
    const [userRegisterStatus, setUserRegisterStatus] = useState(true)
    const [petRegisterStatus, setPetRegisterStatus] = useState(false)
    const [successStatus, setSuccessStatus] = useState(false)
    const [serviceRegisterStatus, setServiceRegisterStatus] = useState(false)
    const [dayRegisterStatus, setDayRegisterStatus] = useState(false)
    const [successOrderStatus, setSuccessOrderStatus] = useState(false)

    const [daySelected, setDaySelected] = useState({})
    const [role, setRole] = useState({})

    const [agendaDays, setAgendaDays] = useState([])
    const [horaSelected, setHoraSelected] = useState("")

    const [passwordState, setPasswordState] = useState("")    

    const [clientInfo, setClientInfo] = useState({
        nombreUsuario: "",
        dadsLastName: "",
        momsLastName: "",
        identificacion: "",
        telefono: "",
        direccion: "",
        edad: "",
        //password: "emapass",
        password: passwordState,
        email: "",
        uid: "",
        lat: "",
        lon: "",
        codPostal: ""
    })

    const [petInfo, setPetInfo] = useState({
        mid: "",
        especie: "",
        raza: "",
        nombre: "",
    })

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    function handleChange(e) {
        setImg(URL.createObjectURL(e.target.files[0]));    
        setFile(e.target.files[0]);
    }

    const createPassword = () =>{
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 9; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        setPasswordState(result)
    }

    const getServices = async(id, r) =>{

        let tipos = [];
        let tipos2 = [];
        
        if(r["canViewAllCenters"] === true){
            await firebase.db.collection("Localidades").get().then(val=>{
                val.docs.forEach(item=>{
                    tipos.push(item.data())
                })
            })
        }else{
            await firebase.db.collection("Localidades").where("aliadoId", "==", id).get().then(val=>{
                val.docs.forEach(item=>{
                    tipos.push(item.data())
                })
            })
        }
        
    
        Promise.all(tipos.map(async (doc) => {
            
            firebase.db.collection("Localidades").doc(doc.localidadId).collection("Servicios").get().then(val=>{
            val.docs.forEach(item=>{
                let o1 = item.data()
                o1["nombreLocalidad"] = doc.nombreLocalidad
                o1["direccionDetallada"] = doc.direccionDetallada
                o1["estadoServicio"] !== "Borrador" && tipos2.push(o1)
            })
            })
    
        }))
    
        setTimeout(() => {
            setServices(tipos2)
        }, 500);
  
    }

    async function getDaysFromService(s){
        let tipos = [];
        
        setService(s)
  
        await firebase.db.collection("Localidades").doc(s.localidadId)
        .collection("Servicios").doc(s.servicioId).collection("Agenda").orderBy("createdOn", "asc").get().then(val=>{
          val.docs.forEach(item=>{
            let d = moment(item.data().date.toDate())
            let today = moment()
            d.isSameOrAfter(today) && tipos.push(item.data())
          })
          setAgendaDays(tipos)
        })
  
      }

    const ErrorComponent = ({msg}) => {
      return (
          <div className="error-alert">
              <span className="material-icons mr-2">error</span>
              {msg}
              <div onClick={()=>{setError(false)}} className="material-icons ml-2 cursor-pointer">close</div>
          </div>
      )
    }

    useEffect(() => {
        firebase.getCurrentUser().then((val)=>{
            setUser(val)
            createPassword()
            firebase.getRoleInfo(val.role ?? "Atencion").then((r)=>{
                setRole(r)
                getServices(val.masterId, r)
            })
        })
    }, [])

    return (

        <div className="main-content-container container-fluid px-4">
            {error && <ErrorComponent msg={emessage === "" ? "Todos los campos son requeridos" : emessage}/>}

            <div className="page-header align-items-center justify-content-spacebetween row no-gutters px-4 my-4">
                <div className="col-12 col-sm-5 text-center text-sm-left mb-0">
                    <div className="row align-items-center">
                        <div className="ml-2 col row">
                          <p className="page-title bold"><Link className="page-title light" to="/clients">Pacientes</Link> <span>Crear nuevo paciente</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-6 mx-auto my-0">

                    { userRegisterStatus && <>
                        <h3 className="mb-2">Crear nuevo paciente</h3>
                        <p className="color-primary light">Crea el paciente con solo los datos basicos para guardarlo dentro de tus pacientes en la plataforma</p>
                        <div className="py-2">
                            <div className="form-group row no-gutters" style={{justifyContent: "space-between"}}>
                                <input type="text" style={{width: "31%", textTransform: "capitalize"}} className="form-control" onChange={(e) => setClientInfo({...clientInfo, nombreUsuario: e.target.value})} placeholder="Nombre" value={clientInfo.nombreUsuario} />
                                <input type="text" style={{width: "31%", textTransform: "capitalize"}} className="form-control" onChange={(e) => setClientInfo({...clientInfo, dadsLastName: e.target.value})} placeholder="Primer apellido" value={clientInfo.dadsLastName} />
                                <input type="text" style={{width: "31%", textTransform: "capitalize"}} className="form-control" onChange={(e) => setClientInfo({...clientInfo, momsLastName: e.target.value})} placeholder="Segundo apellido" value={clientInfo.momsLastName} />
                            </div>
                            <div className="form-group row no-gutters" style={{justifyContent: "space-between"}}>
                                <input type="text" style={{textTransform: "capitalize"}} className="form-control col-lg-5" onChange={(e) => setClientInfo({...clientInfo, identificacion: e.target.value})} placeholder="CURP" value={clientInfo.identificacion} />
                                <input type="text" className="form-control col-lg-5" onChange={(e) => setClientInfo({...clientInfo, codPostal: e.target.value})} placeholder="Código postal" />
                            </div>
                            <div className="form-group">
                                <input type="number" min="0" max="100" className="form-control" onChange={(e) => setClientInfo({...clientInfo, edad: e.target.value})} placeholder="Edad del paciente" value={clientInfo.edad} />
                            </div>
                            <div className="form-group">
                                <select className="form-control" onChange={(e) => setClientInfo({...clientInfo, sexo: e.target.value})} value={clientInfo.sexo}>
                                    <option value="">Sexo</option>
                                    <option value="Mujer">Mujer</option>
                                    <option value="Hombre">Hombre</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" maxlength="10" className="form-control" onChange={(e) => setClientInfo({...clientInfo, telefono: e.target.value})} placeholder="Teléfono" value={clientInfo.telefono} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" onChange={(e) => setClientInfo({...clientInfo, direccion: e.target.value})} placeholder="Dirección" value={clientInfo.direccion} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})} placeholder="Email" value={clientInfo.email} />
                            </div>
                            <div className="form-group d-none">
                                <div className="row align-items-center">
                                    <div className="col-md-11">
                                        <input type={sp ? "text" : "password"} className="form-control" onChange={(e) => setClientInfo({...clientInfo, password: e.target.value})} placeholder="Contraseña" value={clientInfo.password} />
                                    </div>
                                    <span onClick={()=>{setShowPassword(!sp)}} className="material-icons cursor-pointer mb-0">{sp ? "visibility_off" : "visibility" }</span>
                                </div>
                            </div>
                           <button onClick={()=>{ 
                                 (clientInfo.nombreUsuario !== "" && clientInfo.email !== "") && onRegister() 
                            }} className={`btn ${clientInfo.nombreUsuario !== "" && clientInfo.email !== ""? "btn-primary" : "btn-disabled"} btn-block`}>{btnMessage}</button>
                        </div> 
                    </>}
                    
                    {successStatus && <div className="container-creation-success">
                        <h3 className="mb-2">Paciente creado exitosamente</h3>
                        <p className="mb-2">Email: {clientInfo.email} - Contraseña: {passwordState}</p>
                        <span className="color-success material-icons">done</span>
                        <div className="row">
                            <div className="col-lg-6">
                                <Link to="/clients" className={`btn btn-outline-primary btn-block`}>Regresar a pacientes</Link>
                            </div>
                            <div className="col-lg-6">
                                <button onClick={()=>{
                                    setServiceRegisterStatus(true); setUserRegisterStatus(false); setSuccessStatus(false)
                                }} className={`btn btn-success btn-block`}>Agendar cita</button>
                            </div>
                        </div>
                    </div>}
                    
                    {successOrderStatus && <div className="container-creation-success">
                        <h3 className="mb-2">Reservación creada exitosamente</h3>
                        <span className="color-success material-icons">done</span>
                        <div className="row">
                            <div className="col-lg-12">
                                <Link to="/clients" className={`btn btn-outline-primary btn-block`}>Regresar a pacientes</Link>
                            </div>
                        </div>
                    </div>}
                        

                </div>

            </div>

            {/* Services and days */}
            { serviceRegisterStatus && <div className="container-services-creation-main">
                <h3>Selecciona el servicio</h3>
                <div className="container-services-creation my-4">
                    {services.map((s)=>{
                        return (
                            <div onClick={()=>{ service === s ? setService({}) : getDaysFromService(s) }} className={`cc-modal-card-2 mx-1 mb-3 cursor-pointer ${service === s ? "active" : "" }`}
                            style={{backgroundImage: `url(${s.urlImagen})`, display: s["estadoServicio"] !== "Borrador" ? "block" : "none" }}
                            key={s.servicioId}>
                                <div className="cc-modal-card-overlay">
                                    <p style={{width: "fit-content"}} className="pill-secondary rounded">{s.nombreLocalidad}</p>
                                    <p className="mb-0 cc-modal-card-p-strong">
                                    {s.titulo}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row justify-content-spacebetween no-gutters">
                    <Link to="/clients" className={`btn btn-disabled`}>Volver</Link>
                    <button onClick={()=>{ setServiceRegisterStatus(false); setDayRegisterStatus(true) }} className={`btn btn-primary`}>
                        Continuar
                    </button>
                </div>
            </div> }
            
            { dayRegisterStatus && <div className="container-services-creation-main">
                <h3 className="mb-0">Selecciona el día y la hora</h3>
                
                <div style={{width: "inherit"}} className="my-4">
                    <div className="agenda-days-slider">
                        {agendaDays.map((d, i)=>{
                        return (
                            <p className={`${daySelected === d && "day-active"} mb-0`} onClick={()=>{ setDaySelected(d) }} key={i}>
                            {d.bloqueado && <> <i className="material-icons">lock</i> <br/> </>}
                            {d.fecha}
                            </p>
                        )
                        })}
                    </div>
                    
                  { (service.tipoAgenda === "Slots" && daySelected.horasDia !== undefined  ) && 
                    <div className="mt-3 slots-day"> 
                      {
                        daySelected.horasDia.map((h, i)=> <div onClick={()=>{ setHoraSelected(h) }} className={`pill-secondary-2 ${horaSelected === h && "active"}`} key={i}>{h}</div>)
                      }
                    </div>
                  }
                </div>
                
                <div className="row justify-content-spacebetween no-gutters">
                    <button onClick={()=>{ setServiceRegisterStatus(true); setDayRegisterStatus(false); setDaySelected({}); setHoraSelected("") }} className={`btn btn-disabled`}>
                    Volver
                    </button>
                    <button onClick={()=>{
                        (daySelected["horasDia"] !== undefined && horaSelected !== "") && createReservation()
                    }} className={`btn btn-primary`}>
                    Continuar
                    </button>
                </div>
            </div> }

            {/* End Services and days */}

          </div>
    )

}

export default IndexPage