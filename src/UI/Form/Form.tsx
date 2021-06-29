import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "./Input/InputElement";
import classes from "./Form.module.scss";

interface FormProps {
  formHeaderTxt?: string;
  buttonType: "submit" | "reset" | "button";
  buttonText: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, name?: string) => void;
}

const Form: React.FC<FormProps> = ({
  buttonText,
  buttonType,
  onClick,
  formHeaderTxt,
}) => {
  const [nameInput, setNameInput] = useState<string>("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  return (
    <div className={classes["div-form"]}>
      <form className={classes.form}>
        {formHeaderTxt ? (
          <header className={classes.header}>
            <h2 className={classes.h2}>{formHeaderTxt}</h2>
          </header>
        ) : (
          <header>
            <h2>Please Fill All Input Fields</h2>
          </header>
        )}
        <Input type="text" placeholder={"Between 6-15"} onChange={inputHandler} Init={nameInput} />
        <Button
          type={buttonType}
          text={buttonText}
          onClick={(e) => {
            onClick(e, nameInput);
            setNameInput("");
          }}
        />
      </form>
    </div>
  );
};
export default Form;
