import { createContext, useState } from "react";
const DatesContext = createContext()

const DatesProvider = ({children}) => {

    return (
        <DatesContext.Provider value={{}}>
            {children}
        </DatesContext.Provider>
    )
}

export { DatesProvider }
export default DatesContext