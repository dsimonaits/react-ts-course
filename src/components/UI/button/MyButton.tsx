import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classes from "./MyButton.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MyButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
