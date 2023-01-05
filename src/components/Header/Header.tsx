import Logo from "../../assets/icons/Logo";
import s from "./Header.module.scss";
import cl from "classnames";
import Button from "../Button";
import Profile from "../../assets/icons/Profile";
import NavBar from "../NavBar";

interface HeaderProprs {}

const Header: React.FC<HeaderProprs> = () => {
  return (
    <header className={cl(s.header, "container")}>
      <Logo />
      <NavBar />
      <Button onClick={() => {}} className="header-btn">
        <Profile /> Вход
      </Button>
    </header>
  );
};

export default Header;
