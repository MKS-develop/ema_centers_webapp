import { useContext } from "react";
import AttentionContext from "../context/AttentionProvider";

const useAttention = () => useContext(AttentionContext)
export default useAttention