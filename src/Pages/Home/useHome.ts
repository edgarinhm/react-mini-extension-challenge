import useAppDispatch from "../../Hooks/useAppDispatch";
import StudentService from "../../Services/student-service";
import { logout } from "../../State/actions/user-actions";

const useHome = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    StudentService.logout().then((authenticated) =>
      dispatch(logout(authenticated))
    );
  };
  return { handleLogout };
};

export default useHome;
