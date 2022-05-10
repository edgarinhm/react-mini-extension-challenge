import { useEffect, FormEvent } from "react";
import useAppDispatch from "../../Hooks/useAppDispatch";
import useAppSelector from "../../Hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
import { login } from "../../State/actions/user-actions";
import routesPathsContant from "../../Constants/routes-paths-constant";
import useForm from "../../Hooks/useForm";
import loginValidation from "../../Validations/login-validation";

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
    dispatch(login(form));
  };

  useEffect(() => {
    if (authenticated) {
      navigate(routesPathsContant.index);
    }
  }, [authenticated, navigate]);

  return { handleLogin, handleChange, form, disabled, error };
};

export default useLogin;
