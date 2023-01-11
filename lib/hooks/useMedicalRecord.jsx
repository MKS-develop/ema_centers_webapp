import { useContext } from "react";
import MedicalRecordContext from "../context/MedicalRecordProvider";

const useMedicalRecord = () => useContext(MedicalRecordContext)
export default useMedicalRecord