import React from "react";
import s from "./NavBar.module.scss";
import cl from "classnames";

interface NavLinlsProps {
  closeMenu?: () => void;
  isOpen?: boolean;
}

const NavLinks: React.FC<NavLinlsProps> = ({ isOpen, closeMenu }) => {
  return (
    <ul className={cl(s.list, isOpen && s.open)}>
      <li onClick={closeMenu} className={s.item}>
        <a className={s.link} href="#passive">
          Пассивный заработок
        </a>
      </li>
      <li onClick={closeMenu} className={s.item}>
        <a className={s.link} href="#traiding">
          Публичный трейдинг
        </a>
      </li>
      <li onClick={closeMenu} className={s.item}>
        <a className={s.link} href="#security">
          Доходы и безопасность
        </a>
      </li>
      <li onClick={closeMenu} className={s.item}>
        <a className={s.link} href="#help">
          Обратная связь
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
