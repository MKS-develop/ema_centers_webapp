import { createContext, useState } from "react";
const MedicalRecordDetailContext = createContext()

const MedicalRecordDetailProvider = ({children}) => {

    return (
        <MedicalRecordDetailContext.Provider value={{}}>
            {children}
        </MedicalRecordDetailContext.Provider>
    )
}

export { MedicalRecordDetailProvider }
export default MedicalRecordDetailContext