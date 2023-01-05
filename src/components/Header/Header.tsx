import s from "./Header.module.scss";

interface HeaderProprs {}

const Header: React.FC<HeaderProprs> = () => {
  return <header className={s.header}>Header</header>;
};

export default Header;
