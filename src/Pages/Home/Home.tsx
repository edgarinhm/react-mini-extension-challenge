import Header from "../../Components/Layouts/Header";
import CardItems from "../../Components/Layouts/CardItems/CardItems";
import "./home.css";
import useHome from "./useHome";
import Button from "../../Components/Commons/Button";

const Home = () => {
  const { studenName, handleLogout } = useHome();
  return (
    <article className="home_wrap">
      <Header title="Mini Extension Challenge">
        <div className="action_buttons">
          <Button label="Logout" onClick={handleLogout} />
        </div>
      </Header>
      <CardItems course={""} students={studenName} />
    </article>
  );
};

export default Home;
