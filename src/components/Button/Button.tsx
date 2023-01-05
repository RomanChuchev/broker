import { ReactNode } from "react";
import cl from "classnames";

import s from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "btn",
}) => {
  return (
    <button className={cl(s.button, s[className])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
