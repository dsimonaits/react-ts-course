import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cl from "./MyButton.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  styles?: String;
}

const MyButton: FC<ButtonProps> = ({ children, styles, ...props }) => {
  const combinedClasses = `${cl.myBtn} ${styles}`;

  return (
    <button {...props} className={combinedClasses}>
      {children}
    </button>
  );
};

export default MyButton;
