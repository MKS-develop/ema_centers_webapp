import { createContext, useState } from "react";
const PatientContext = createContext()

const PatientProvider = ({children}) => {

    return (
        <PatientContext.Provider value={{}}>
            {children}
        </PatientContext.Provider>
    )
}

export { PatientProvider }
export default PatientContext