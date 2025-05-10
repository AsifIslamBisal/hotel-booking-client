import { useContext } from "react"
import authContext from "../context/AuthContext"

const useAuth = () =>{
    const context = useContext(authContext);
    return context;
}

export default useAuth;