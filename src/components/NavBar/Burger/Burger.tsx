import s from "./Burger.module.scss";
import cl from "classnames";

interface BurgerProps {
  onClick: () => void;
  isOpen: boolean;
}

const Burger: React.FC<BurgerProps> = ({ onClick, isOpen }) => {
  return (
    <div onClick={onClick} className={cl(s.burger, isOpen && s.open)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
