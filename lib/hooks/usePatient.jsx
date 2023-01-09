import { useContext } from "react";
import PatientContext from "../context/PatientProvider";

const usePatient = useContext(PatientContext)
export default usePatient