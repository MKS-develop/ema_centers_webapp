import { createContext, useState } from "react";
const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const Login = () => {}

    return (
        <AuthContext.Provider value={{
            userData, 
            setUserData,
            Login
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext