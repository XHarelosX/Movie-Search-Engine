import React, { Fragment, useState } from "react";
import FavoritesMovie from "../FavoritesMovies/FavoritesMovies";
import MovieList from "../MovieList/MovieList";
import classes from "./UserPage.module.scss";

interface UserProps {
  username: string | null;
}

const UserPage: React.FC<UserProps> = ({ username }) => {
  const [favoriteToggle, setFavoriteToggle] = useState(false);

  const ToggleHandler = () => {
    setFavoriteToggle((prevstate) => {
      return !prevstate;
    });
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.h1}>{username}</h1>
        <div className={classes.favorites} onClick={ToggleHandler}>
          Favorites Movies
        </div>
      </header>
      {favoriteToggle ? <FavoritesMovie loggedUsername={username}/> : <MovieList />}
    </Fragment>
  );
};
export default UserPage;
