import React, { Fragment } from "react";
import Button from "../../Button/Button";
import classes from "./ErrorModal.module.scss";

interface ErrorModalProps {
  onButtonClick: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ onButtonClick }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Invalid Username</h2>
      </header>
      <div className={classes.content}>
        <p>Please Enter Your Name (Between 6 to 15 characters).</p>
      </div>
      <footer className={classes.actions}>
        <Button text={"Okey"} type={"button"} onClick={onButtonClick} />
      </footer>
    </Fragment>
  );
};
export default ErrorModal;
