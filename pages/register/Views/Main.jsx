import React from 'react'

function Main() {

    const hiddenFileInput = React.useRef(null);

    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    const [src, setImg] = useState('');
  
    const handleClick = event => {
      hiddenFileInput.current.click();
    };

    function handleChange(e) {
        setImg(URL.createObjectURL(e.target.files[0]));    
        setFile(e.target.files[0]);
    }
      
    return (
        <main className="container">
            <div className="h-100vh row no-gutters flow-column align-items-center">
                <form className="bg-white p-5 rounded mt-5 w-100">
                    <div className="row mb-5">
                        <div className="form-register-image mx-auto">
                            <img src="../images/logo.png" alt="EMA Aliados"/>
                        </div>
                        <input type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange} 
                            style={{display: 'none'}}
                        />
                        <div onClick={handleClick} className="register-img">
                            {src !== "" ? <img src={src} alt="" /> : <div className="register-img-upload"><p className="material-icons icon mb-0">add</p></div>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email} />
                        </div>
                        <div className="form-group col-md-6">
                            <div className="row align-items-center">
                                <div className="col-md-11">
                                    <input type={sp ? "text" : "password"} className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" value={password} />
                                </div>
                                <span onClick={()=>{setShowPassword(!sp)}} className="material-icons mb-0">{sp ? "visibility_off" : "visibility" }</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" onChange={(e) => setNombreCompleto(e.target.value)} placeholder="Nombre completo" value={nombreCompleto} />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" onChange={(e) => setNombreComercial(e.target.value)} placeholder="Nombre comercial" value={nombreComercial} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <select className="form-control" value={tipoEmpresa} onChange={(e) => setTipoEmpresa(e.target.value)}>
                                {tiposEmpresa.map(data => (
                                    <option key={data} value={data}>{data}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <select className="form-control" value={tipoAliado} onChange={e => setTipoAliado(e.target.value)}>
                                <option value="">Seleccionar</option>
                                <option value="Especialista">Especialista</option>
                                <option value="Atencion">Atención</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" value={telefono} />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" onChange={(e) => setIdentificacion(e.target.value)} placeholder="Identificación" value={identificacion} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" onChange={(e) => setDireccion(e.target.value)} placeholder="Dirección" value={direccion} />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" onChange={(e) => setLocalidad(e.target.value)} placeholder="Localidad" value={localidad} />
                        </div>
                    </div>
                    <button onClick={onRegister} className="btn btn-primary"> Registrate </button>
                </form>
            </div>
        </main>
    )
}

export default Main