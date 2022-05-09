import Button from "../../Components/Commons/Button";
import ListCourses from "../../Components/Layouts/ListCourses/ListCourses";
import Header from "../../Components/Layouts/Header";
import useHome from "./useHome";
import "./home.css";

const Home = () => {
  const { handleLogout } = useHome();
  return (
    <article className="home_wrap">
      <Header title="Mini Extension Challenge">
        <div className="action_buttons">
          <Button label="Logout" onClick={handleLogout} />
        </div>
      </Header>
      <ListCourses />
    </article>
  );
};

export default Home;
