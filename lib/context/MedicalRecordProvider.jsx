import { createContext, useState } from "react";
const MedicalRecordContext = createContext()

const MedicalRecordProvider = ({children}) => {

    const [active, setActive] = useState(0)

    return (
        <MedicalRecordContext.Provider value={{
            setActive,
            active
        }}>
            {children}
        </MedicalRecordContext.Provider>
    )
}

export { MedicalRecordProvider }
export default MedicalRecordContext