import { useContext } from "react";
import PatientsContext from "../context/PatientsProvider";

const usePatients = useContext(PatientsContext)
export default usePatients