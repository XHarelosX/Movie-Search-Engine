import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";
import classes from "./MovieItem.module.scss";
import MoreInfo from "../../../UI/Modal/MoreInfo/MoreInfo";
import Modal from "../../../UI/Modal/Modal";

interface MovieItemProps {
  addTofavorite: (e: React.MouseEvent<HTMLButtonElement>) => void;
  movieName: string;
  movieYear: string;
  movieFullPlot: string;
  movieImage: string;
  movieId: string;
  movieReleased: string;
  movieRuntime: string;
  movieGenre: string;
  movieWriter: string;
  movieActors: string;
}

const MovieItem: React.FC<MovieItemProps> = ({
  addTofavorite,
  movieImage,
  movieName,
  movieFullPlot,
  movieYear,
  movieId,
  movieReleased,
  movieRuntime,
  movieGenre,
  movieWriter,
  movieActors,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);

  const modalToggleHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const ShortPlot = `${movieFullPlot.substr(0, 150)}...`;

  let MovieMoreInfo = isModalOpen ? (
    <Modal id={"overlay"} onClick={modalToggleHandler}>
      <MoreInfo
        onClick={modalToggleHandler}
        movieName={movieName}
        movieFullPlot={movieFullPlot}
        movieShortPlot={ShortPlot}
        movieImage={movieImage}
        movieId={movieId}
        movieReleased={movieReleased}
        movieRuntime={movieRuntime}
        movieGenre={movieGenre}
        movieWriter={movieWriter}
        movieActors={movieActors}
      />
    </Modal>
  ) : null;

  return (
    <Card onClick={modalToggleHandler}>
      <div className={classes.div_header_img}>
        <header className={classes.li_header}>
          <img
            className={classes.li_img}
            src={movieImage}
            alt={"Movie Poster"}
          />
        </header>
        <div className={classes.div_movie_info_mobile}>
          <div>
            <h1 className={classes.h1}>{movieName}</h1>
          </div>
          <div>
            <h3>Movie Year: {movieYear}</h3>
          </div>
          <div>
            <p>{ShortPlot}</p>
          </div>
          <div>
            <Button
              width={"150px"}
              type={"button"}
              text={"Add To Favorites"}
              onClick={addTofavorite}
            />
          </div>
        </div>
      </div>
      {MovieMoreInfo}
    </Card>
  );
};
export default MovieItem;
