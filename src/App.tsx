import { useState, useEffect } from "react";

import {
  getMovieDetails,
  Movie,
  MovieDetailsData,
  searchMovies,
} from "./api/movies.api";

import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

import SearchIcon from "./assets/search.svg";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term input
  const [movies, setMovies] = useState<Movie[]>([]); // List of movies
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsData | null>(
    null
  ); // Selected movie

  // Fetch default movies on mount
  useEffect(() => {
    // setSearchTerm("x-men")
    handleSearch();
  }, []);

  const handleSearch = async () => {
    const response = searchTerm
      ? await searchMovies(searchTerm)
      : await searchMovies("x-men");
    // const response = await searchMovies("x-men");
    setMovies(response);
  };

  const handleMovieClick = async (imdbID: string) => {
    const movieDetails = await getMovieDetails(imdbID);
    setSelectedMovie(movieDetails);
  };

  const handleKeyDown = (event: { key: string; }) => {
    console.log("enter is preseed")
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 bg-blue-500 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Test Movies</h1>

      {/* Search Input */}
      <div className="flex items-center w-4/5 max-w-lg bg-blue-300 rounded-full px-6 py-3 shadow-lg">
        <input
          className="flex-1 bg-transparent text-lg placeholder-gray-700 text-gray-800 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          onKeyDown={handleKeyDown}
        />
        <img
          src={SearchIcon}
          alt="search"
          className="w-8 h-8 cursor-pointer"
          onClick={handleSearch}
         
        />
      </div>

      {/* Movie Cards */}
      {movies.length > 0 ? (
        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {movies.slice(0, 3).map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onClick={() => handleMovieClick(movie.imdbID)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12">
          <h2 className="text-xl text-yellow-200">No movies found</h2>
        </div>
      )}
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default App;
