import React from "react";
import Input from "../../UI/Form/Input/InputElement";
import classes from "./SearchBar.module.scss";

interface SeacrhBarProps {
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SeacrhBar: React.FC<SeacrhBarProps> = ({ inputHandler }) => {
  return (
    <div className={classes.div_search}>
      <div className={classes.search}>
        <header>
          <h4 className={classes.title}>Search Movie</h4>
        </header>
        <Input type={"text"} onChange={inputHandler} />
      </div>
    </div>
  );
};
export default SeacrhBar;
