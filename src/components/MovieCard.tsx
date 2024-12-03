
import { Movie } from "../api/movies.api";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <div
      className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
        alt={movie.Title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <span className="text-sm uppercase font-medium text-gray-400">{movie.Type}</span>
        <h3 className="text-lg font-bold text-white mt-2">{movie.Title}</h3>
        <p className="text-sm text-gray-400 mt-1">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
