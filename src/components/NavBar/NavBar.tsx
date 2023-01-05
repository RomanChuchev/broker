import React from "react";
import MobileNav from "./MobileNav";
import s from "./NavBar.module.scss";
import NormalNav from "./NormalNav";

const NavBar = () => {
  return (
    <div className={s.navbar}>
      <MobileNav />
      <NormalNav />
    </div>
  );
};

export default NavBar;
