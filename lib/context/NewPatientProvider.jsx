import { createContext, useState, useEffect } from "react";
const NewPatientContext = createContext()

const NewPatientProvider = ({children}) => {
      
    const createPassword = () =>{
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 9; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        return result
    }

    const [stepActive, setStepActive] = useState(0)
    const [listOfSteps, setListOfSteps] = useState([
        {label: "Información del paciente", status: false, step: 0},
        {label: "Selecciona el centro", status: false, step: 1},
        {label: "Selecciona el dia y la hora", status: false, step: 2},
    ])
    
    const [patient, setPatient] = useState({
        nombreUsuario: "",
        dadsLastName: "",
        momsLastName: "",
        identificacion: "",
        telefono: "",
        direccion: "",
        edad: "",
        password: createPassword(),
        email: "",
        uid: "",
        lat: "",
        lon: "",
        codPostal: ""
    })
    const [selectedCenter, setSelectedCenter] = useState({})
    const [dateData, setDateData] = useState({
        day: "",
        hour: ""
    })

    const changeStep = () => setStepActive(stepActive + 1)
    
    function updateSteps(){
        let list = [...listOfSteps]
        list[stepActive]["status"] = true
        changeStep()
        setListOfSteps(list)
    }

    function handleChangeOfFunction(){
        switch (stepActive) {
            case 1:
                console.log(patient)
                break;
            case 2:
                console.log("Servicio listo")
                break;
            case 3:
                console.log("Hora y dia listo")
                break;
            default:
                break;
        }
    }

    useEffect(() => {
      handleChangeOfFunction()
    }, [stepActive])

    return (
        <NewPatientContext.Provider value={{
            stepActive,
            updateSteps,
            setPatient,
            patient,
            listOfSteps,
            setSelectedCenter,
            selectedCenter,
            setDateData,
            dateData
        }}>
            {children}
        </NewPatientContext.Provider>
    )
}

export { NewPatientProvider }
export default NewPatientContext