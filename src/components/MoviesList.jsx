import movies from "../movies-data.json";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MoviesList() {
  const [moviesList, setMoviesList] = useState(movies);

  function deleteMovieById(id) {
    /** This .filter() copies all movies that are NOT being deleted */
    setMoviesList(moviesList.filter((movie) => movie._id !== id));
  }

  return (
    <div>
      <h1>Movies form the json file</h1>
      {moviesList.map((movie) => (
        <MovieCard movie={movie} deleteMovieById={deleteMovieById} />
      ))}
    </div>
  );
}
