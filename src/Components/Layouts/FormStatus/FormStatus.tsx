import { useEffect } from "react";
import useAppDispatch from "../../../Hooks/useAppDispatch";
import useAppSelector from "../../../Hooks/useAppSelector";
import { formStatus } from "../../../State/actions/form-actions";

const FormStatus = () => {
  const { message } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(formStatus({ message: "" }));
  }, [dispatch]);
  return <>{message && <div className="form_status">{message}</div>}</>;
};

export default FormStatus;
