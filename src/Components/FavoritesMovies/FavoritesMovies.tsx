import React, { Fragment, useState, useEffect } from "react";
import Card from "../../UI/Card/Card";
import classes from "./FavoritesMovies.module.scss";

type FavoritesMovieProps = {
  loggedUsername: string | null;
};

const FavoritesMovie: React.FC<FavoritesMovieProps> = ({ loggedUsername }) => {
  const [favoriteMovie, setfavoriteMovie] = useState<any[]>([]);

  function checkFavoriteMovies() {
    if (sessionStorage.length > 1) {
      Object.values(sessionStorage).forEach((item) => {
        if (item !== loggedUsername) {
          setfavoriteMovie((prevState) => {
            return [...prevState, JSON.parse(item)];
          });
        }
      });
    }
  }

  useEffect(() => {
    checkFavoriteMovies();
  }, []);

  const favoriteMovieList = favoriteMovie.map((movie) => {
    return (
      <Card key={movie.imdbID}>
        <div className={classes.div_header_img}>
          <header className={classes.li_header}>
            <img
              className={classes.li_img}
              src={movie.Poster}
              alt={"Movie Poster"}
            />
          </header>
          <div className={classes.div_movie_info_mobile}>
            <div>
              <h1 className={classes.h1}>{movie.Title}</h1>
            </div>
            <div>
              <h3>Movie Year: {movie.Year}</h3>
            </div>
            <div>
              <p>{`${movie.Plot.substr(0, 200)}...`}</p>
            </div>
          </div>
        </div>
      </Card>
    );
  });
  return (
    <Fragment>
      <ul className={classes.ul}>
        {(favoriteMovie.length > 0 ) ? favoriteMovieList : <Card><div>No movies found.</div></Card>}
      </ul>
    </Fragment>
  );
};
export default FavoritesMovie;
