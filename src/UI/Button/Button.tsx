import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  width?: string;
  height?: string;
  type?: "submit" | "reset" | "button";
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ type, text, width, height, onClick }) => {
  return (
    <button style={{width: width, height: height}} type={type} className={classes.btn} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
