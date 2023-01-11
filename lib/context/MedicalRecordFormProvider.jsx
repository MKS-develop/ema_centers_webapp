import { createContext, useState } from "react";
const MedicalRecordFormContext = createContext()

const MedicalRecordFormProvider = ({children}) => {

    const [activeForm, setActiveForm] = useState(0)

    return (
        <MedicalRecordFormContext.Provider value={{
            setActiveForm,
            activeForm
        }}>
            {children}
        </MedicalRecordFormContext.Provider>
    )
}

export { MedicalRecordFormProvider }
export default MedicalRecordFormContext