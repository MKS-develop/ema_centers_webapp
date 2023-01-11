import { useContext } from "react";
import MedicalRecordFormContext from "../context/MedicalRecordFormProvider";

const useMedicalRecordForm = () => useContext(MedicalRecordFormContext)
export default useMedicalRecordForm