import { Link } from "react-router-dom";
import s from "./Header.module.scss";

interface HeaderProprs {}

const Header: React.FC<HeaderProprs> = () => {
  return (
    <header className={s.header}>
      <Link to="/auth">Auth</Link>
      <Link to="/">Home</Link>
      <Link to="/person">Person</Link>
      Header
    </header>
  );
};

export default Header;
