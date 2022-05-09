import Button from "../../Components/Commons/Button";
import Input from "../../Components/Commons/Input";
import useLogin from "./useLogin";
import "./login.css";

interface FormData {
  name: string;
}

const Login = () => {
  const initState = {
    name: "",
  };
  const { handleLogin, handleChange, form } = useLogin<FormData>(initState);
  return (
    <section className="login_wrap">
      <form>
        <Input name="name" label="Student Name" onChange={handleChange} />
        <div className="actions">
          <Button onClick={() => handleLogin(form.name)} label="Submit" />
        </div>
      </form>
    </section>
  );
};

export default Login;
