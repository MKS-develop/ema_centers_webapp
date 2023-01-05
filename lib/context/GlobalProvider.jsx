import { createContext, useState } from "react";
const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

    const [activeLink, setActiveLink] = useState("/")
    const changeActiveLink = (prop) => setActiveLink(prop)
    
    return (
        <GlobalContext.Provider value={{
            activeLink,
            changeActiveLink
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider }
export default GlobalContext