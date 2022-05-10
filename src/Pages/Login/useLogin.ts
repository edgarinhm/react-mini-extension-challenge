import { useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useAppDispatch from "../../Hooks/useAppDispatch";
import useAppSelector from "../../Hooks/useAppSelector";
import useForm from "../../Hooks/useForm";
import { login } from "../../State/actions/user-actions";
import { formStatus } from "../../State/actions/form-actions";
import loginValidation from "../../Validations/login-validation";
import routesPathsContant from "../../Constants/routes-paths-constant";

const useLogin = () => {
  interface FormData {
    name: string;
  }
  const initState: FormData = {
    name: "",
  };

  const { form, handleChange, disabled, error } = useForm(
    initState,
    loginValidation
  );
  const dispatch = useAppDispatch();
  const { authenticated } = useAppSelector((state) => state.session);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(form)).catch((errorLogin) => {
      dispatch(formStatus({ message: errorLogin.message }));
    });
  };

  useEffect(() => {
    if (authenticated) {
      navigate(routesPathsContant.index);
    }
  }, [authenticated, navigate]);

  return {
    handleLogin,
    handleChange,
    form,
    disabled,
    error,
  };
};

export default useLogin;
