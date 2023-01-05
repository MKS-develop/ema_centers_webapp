import { useContext } from "react";
import GlobalContext from "../context/GlobalProvider";

const useGlobal = () => useContext(GlobalContext)
export default useGlobal