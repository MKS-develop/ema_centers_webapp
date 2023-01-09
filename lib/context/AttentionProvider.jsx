import { createContext, useState } from "react";
const AttentionContext = createContext()

const AttentionProvider = ({children}) => {

    const [activeForm, setActiveForm] = useState(0)

    return (
        <AttentionContext.Provider value={{
            setActiveForm,
            activeForm
        }}>
            {children}
        </AttentionContext.Provider>
    )
}

export { AttentionProvider }
export default AttentionContext