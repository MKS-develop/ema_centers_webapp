import { createContext, useState } from "react";
const HomeContext = createContext()

const HomeProvider = ({children}) => {

    return (
        <HomeContext.Provider value={{}}>
            {children}
        </HomeContext.Provider>
    )
}

export { HomeProvider }
export default HomeContext