import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../State/reducers/root-reducer";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
