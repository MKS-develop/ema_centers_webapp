import { useContext } from "react";
import DatesContext from "../context/DatesProvider";

const useDates = () => useContext(DatesContext)
export default useDates