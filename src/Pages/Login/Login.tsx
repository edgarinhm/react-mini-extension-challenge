import Button from "../../Components/Commons/Button";
import Input from "../../Components/Commons/Input";
import Loader from "../../Components/Layouts/Loader";
import FormStatus from "../../Components/Layouts/FormStatus";
import useLogin from "./useLogin";
import "./login.css";

const Login = () => {
  const { handleLogin, handleChange, disabled, error } = useLogin();
  return (
    <section className="login_wrap">
      <FormStatus />
      <Loader />
      <form onSubmit={handleLogin}>
        <Input
          name="name"
          label="Student Name"
          onChange={handleChange}
          error={error.name}
        />
        <div className="actions">
          <Button type="submit" label="Submit" disabled={disabled} />
        </div>
      </form>
    </section>
  );
};

export default Login;
