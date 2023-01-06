import { useState } from "react";
import Burger from "./Burger";
import s from "./NavBar.module.scss";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <nav className={s.mobile}>
      <Burger isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <NavLinks isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default MobileNav;
