import Button from "../../Components/Commons/Button";
import Input from "../../Components/Commons/Input";
import useLogin from "./useLogin";
import "./login.css";

const Login = () => {
  const { handleLogin, handleChange } = useLogin();
  return (
    <section className="login_wrap">
      <form onSubmit={handleLogin}>
        <Input name="name" label="Student Name" onChange={handleChange} />
        <div className="actions">
          <Button type="submit" label="Submit" />
        </div>
      </form>
    </section>
  );
};

export default Login;
