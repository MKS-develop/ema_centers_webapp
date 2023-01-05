import { createContext, useState } from "react";
const TreatmentsContext = createContext()

const TreatmentsProvider = ({children}) => {

    return (
        <TreatmentsContext.Provider value={{}}>
            {children}
        </TreatmentsContext.Provider>
    )
}

export { TreatmentsProvider }
export default TreatmentsContext