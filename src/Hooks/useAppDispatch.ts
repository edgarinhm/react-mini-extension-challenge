import { useDispatch as useReduxDispatch } from "react-redux";
import { AppDispatch } from "../State/store";

const useAppDispatch = () => useReduxDispatch<AppDispatch>();

export default useAppDispatch;
