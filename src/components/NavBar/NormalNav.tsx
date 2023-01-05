import React from "react";
import s from "./NavBar.module.scss";
import NavLinks from "./NavLinks";

const NormalNav = () => {
  return (
    <nav className={s.normal}>
      <NavLinks />
    </nav>
  );
};

export default NormalNav;
