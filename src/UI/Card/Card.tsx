import React, { ReactNode } from "react";
import classes from "./Card.module.scss";

interface CardProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <li className={classes.card} onClick={onClick}>
      {children}
    </li>
  );
};

export default Card;
