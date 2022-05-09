import { useEffect, FormEvent } from "react";
import useAppDispatch from "../../Hooks/useAppDispatch";
import useAppSelector from "../../Hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
import { login } from "../../State/actions/user-actions";
import routesPathsContant from "../../Constants/routes-paths-constant";
import useForm from "../../Hooks/useForm";

const useLogin = () => {
  interface FormData {
    name: string;
  }
  const initState = {
    name: "",
  };

  const { form, handleChange } = useForm<FormData>(initState);

  const dispatch = useAppDispatch();
  const { authenticated } = useAppSelector((state) => state.session);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.name.trim() !== "") {
      dispatch(login(form));
    } else {
      console.log("ERROR VALIDATION", form.name);
    }
  };

  useEffect(() => {
    if (authenticated) {
      navigate(routesPathsContant.index);
    }
  }, [authenticated, navigate]);

  return { handleLogin, handleChange, form };
};

export default useLogin;
