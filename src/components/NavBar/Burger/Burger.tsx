import s from "./Burger.module.scss";
import cl from "classnames";
const Burger = () => {
  return (
    <div className={cl(s.burger)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
