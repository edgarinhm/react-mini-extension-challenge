import { Navigate, useLocation } from "react-router-dom";
import routesPathaContant from "../../Constants/routes-paths-constant";
import useAppSelector from "../../Hooks/useAppSelector";

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { authenticated } = useAppSelector((state) => state.session);
  let location = useLocation();

  if (!authenticated) {
    return (
      <Navigate
        to={routesPathaContant.login}
        state={{ path: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default RequireAuth;
