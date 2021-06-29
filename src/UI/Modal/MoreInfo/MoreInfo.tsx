import React, { useState } from "react";
import Button from "../../Button/Button";
import classes from "./MoreInfo.module.scss";

interface MoreInfoModalProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  movieName: string;
  movieFullPlot: string;
  movieShortPlot: string;
  movieImage: string;
  movieId: string;
  movieReleased: string;
  movieRuntime: string;
  movieGenre: string;
  movieWriter: string;
  movieActors: string;
}

const MoreInfoModal: React.FC<MoreInfoModalProps> = ({
  onClick,
  movieName,
  movieFullPlot,
  movieShortPlot,
  movieImage,
  movieReleased,
  movieRuntime,
  movieGenre: movieGanre,
  movieWriter,
  movieActors,
}) => {
  const [plotToggle, setPlotToggle] = useState(false);

  const togglePlotHandler = () => {
    setPlotToggle((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes.div_modal}>
      <header>
        <img src={movieImage} alt="Movie Poster" />
      </header>
      <div className={classes.div_info}>
        <div>
          <h2>
            {movieName} ({movieReleased})
          </h2>
          <div>
            <h3>Writer:</h3> {movieWriter}.
          </div>
          <div>
            <h3>Actors:</h3> {movieActors}.
          </div>
          <div>
            <h3>Runtime:</h3> {movieRuntime}
          </div>
          <div>
            <h3>Ganre:</h3> {movieGanre}.
          </div>
        </div>
        <h3>Plot:</h3>
        <p>{!plotToggle ? movieShortPlot : movieFullPlot}</p>
        <div className={classes.modal_info_btns}>
          <Button
            type={"button"}
            text={!plotToggle ? "Expend Plot" : "Shorten Plot"}
            onClick={togglePlotHandler}
            width={"100px"}
            height={"24px"}
          ></Button>
          <Button
            type={"button"}
            text={"Close"}
            onClick={onClick}
            width={"100px"}
            height={"24px"}
          ></Button>
        </div>
      </div>
    </div>
  );
};
export default MoreInfoModal;
