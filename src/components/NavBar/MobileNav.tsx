import Burger from "./Burger";
import s from "./NavBar.module.scss";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  return (
    <nav className={s.mobile}>
      <Burger />
      <NavLinks />
    </nav>
  );
};

export default MobileNav;
