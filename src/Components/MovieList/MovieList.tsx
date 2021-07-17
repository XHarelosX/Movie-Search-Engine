import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import classes from "./MovieList.module.scss";
import MovieItem from "./MovieItem/MovieItem";

interface MovieListProps {}

const MovieList: React.FC<MovieListProps> = () => {
  const [searchInput, setSearchInput] = useState("");
  const [moviesFound, setMoviesFound] = useState<any[]>([]);

  const addToSessionfavoriteMovieHandler = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.stopPropagation();
    if (moviesFound.length > 0) {
      let movieDataAsSrting: string = JSON.stringify(moviesFound[0]);
      sessionStorage.setItem(moviesFound[0].imdbID, movieDataAsSrting);
    }
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  function getMoviesByInput(input: string) {
    return fetch(
      `https://www.omdbapi.com/?${process.env.REACT_APP_MY_API_KEY}&t=${input}&plot=full`
    );
  }

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (searchInput !== "") {
        getMoviesByInput(searchInput)
          .then((res) => res.json())
          .then((response) => {
            if (response.Error) {
              console.log(response.Error);
            } else {
              setMoviesFound((prev) => {
                return [...prev, response];
              });
            }
          })
          .catch((error) => console.error(error));
      }
    }, 1000);

    return () => {
      setMoviesFound([]);
      clearTimeout(identifier);
    };
  }, [searchInput]);

  let cssMovieFound = "div_search";
  if (moviesFound.length > 0) {
    cssMovieFound += " div_search_items_found";
  }

  return (
    <div>
      <div className={classes[cssMovieFound]}>
        <SearchBar inputHandler={inputHandler} />
      </div>
      <div className={classes.div_ul}>
        <ul className={classes.ul}>
          {moviesFound.map((movie) => {
            return (
              <MovieItem
                key={movie.imdbID}
                addTofavorite={addToSessionfavoriteMovieHandler}
                movieId={movie.imdbID}
                movieName={movie.Title}
                movieYear={movie.Year}
                movieFullPlot={movie.Plot}
                movieImage={movie.Poster}
                movieReleased={movie.Released}
                movieRuntime={movie.Runtime}
                movieGenre={movie.Genre}
                movieWriter={movie.Writer}
                movieActors={movie.Actors}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default MovieList;
