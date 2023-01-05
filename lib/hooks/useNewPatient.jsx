import { useContext } from "react";
import NewPatientContext from "../context/NewPatientProvider";

const useNewPatient = () => useContext(NewPatientContext)
export default useNewPatient