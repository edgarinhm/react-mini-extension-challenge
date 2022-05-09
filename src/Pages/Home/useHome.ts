import useAppDispatch from "../../Hooks/useAppDispatch";
import useAppSelector from "../../Hooks/useAppSelector";
import { logout } from "../../State/actions/user-actions";

const useHome = () => {
  const {
    student: { records },
  } = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();
  const studenName = records[0].fields.Name;
  const handleLogout = () => {
    console.log("handleLogout");
    dispatch(logout);
  };
  return { handleLogout, studenName };
};

export default useHome;
