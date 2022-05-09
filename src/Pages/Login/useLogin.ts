import { useState, ChangeEvent } from "react";
import useAppDispatch from "../../Hooks/useAppDispatch";
import useAppSelector from "../../Hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
import { login } from "../../State/actions/user-actions";
import routesPathsContant from "../../Constants/routes-paths-constant";

const useLogin = <T extends Object>(initState: T) => {
  const [form, setForm] = useState(initState);
  const dispatch = useAppDispatch();
  const { authenticated } = useAppSelector((state) => state.session);
  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  const handleLogin = (name: string) => {
    if (name.trim() !== "") {
      dispatch(login({ name })).finally(function () {
        if (authenticated) {
          navigate(routesPathsContant.index);
        }
      });
    } else {
      console.log("ERROR VALIDATION", name);
    }
  };

  return { handleLogin, handleChange, form };
};

export default useLogin;
