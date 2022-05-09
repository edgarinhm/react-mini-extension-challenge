import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NotMatch } from "./Components/Layouts/NotMatch";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home";
import RequireAuth from "./Components/Routes/RequireAuth";
import routesPathsContant from "./Constants/routes-paths-constant";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path={routesPathsContant.index}
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      ></Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
