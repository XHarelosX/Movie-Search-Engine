import React, { Fragment } from "react";
import Form from "../../UI/Form/Form";
import classes from "./LoginForm.module.scss";

interface LoginFromProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>, username: string) => void;
}

const LoginForm: React.FC<LoginFromProps> = ({ onClick }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.title}>
          Welcome To OMDb API Movies Search Engine
        </h1>
      </header>
      <Form
        formHeaderTxt={"Please Enter Username:"}
        buttonText={"Login"}
        buttonType={"submit"}
        onClick={(e, username) => onClick(e, username!)}
      />
    </Fragment>
  );
};
export default LoginForm;
