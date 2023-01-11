import { useContext } from "react";
import MedicalRecordDetailContext from "../context/MedicalRecordDetailProvider";

const useMedicalRecordDetail = () => useContext(MedicalRecordDetailContext)
export default useMedicalRecordDetail