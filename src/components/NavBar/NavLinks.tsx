import React from "react";
import s from "./NavBar.module.scss";

const NavLinks = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <a className={s.link} target="_blank" href="#!">
          Пассивный заработок
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} target="_blank" href="#!">
          Публичный трейдинг
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} target="_blank" href="#!">
          Доходы и безопасность{" "}
        </a>
      </li>
      <li className={s.item}>
        <a className={s.link} target="_blank" href="#!">
          Обратная связь
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
