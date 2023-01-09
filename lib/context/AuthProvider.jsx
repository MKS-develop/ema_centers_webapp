import { createContext, useState } from "react";
const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const userRole = 1
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const Login = () => {}

    return (
        <AuthContext.Provider value={{
            userData, 
            setUserData,
            Login,
            userRole
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext