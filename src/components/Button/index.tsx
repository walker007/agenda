import { ButtonHTMLAttributes, ReactNode } from "react";

import "./style.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...restante
}) => {
  return (
    <button {...restante} className={`botao ${className}`}>
      {children}
    </button>
  );
};
