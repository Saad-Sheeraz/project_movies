
import { MovieDetailsData } from "../api/movies.api";

interface MovieDetailsProps {
  movie: MovieDetailsData;
  onClose: () => void;
}

const MovieDetails = ({ movie, onClose }: MovieDetailsProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full overflow-hidden">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Movie Poster and Info */}
        <div className="flex flex-col md:flex-row">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300"
            }
            alt={`${movie.Title} Poster`}
            className="w-full md:w-1/3 h-auto object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-4">{movie.Title}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Year:</strong> {movie.Year}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Rated:</strong> {movie.Rated}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Runtime:</strong> {movie.Runtime}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Director:</strong> {movie.Director}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Writer:</strong> {movie.Writer}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Awards:</strong> {movie.Awards}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>IMDB Rating:</strong> {movie.imdbRating} / 10
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Box Office:</strong> {movie.BoxOffice || "N/A"}
            </p>
          </div>
        </div>

        {/* Ratings */}
        {movie.Ratings && movie.Ratings.length > 0 && (
          <div className="p-6 border-t border-gray-200">
            <h3 className="text-lg font-bold mb-2">Ratings:</h3>
            <ul className="space-y-2">
              {movie.Ratings.map((rating, index) => (
                <li key={index} className="text-gray-600">
                  <strong>{rating.Source}:</strong> {rating.Value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
