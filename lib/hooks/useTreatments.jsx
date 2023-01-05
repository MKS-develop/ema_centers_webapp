import { useContext } from "react";
import TreatmentsContext from "../context/TreatmentsProvider";

const useTreatments = () => useContext(TreatmentsContext)
export default useTreatments