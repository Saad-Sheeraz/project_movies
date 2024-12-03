export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface MovieDetailsData {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

const API_URL = import.meta.env.VITE_APP_API_URL;

// Function to search movies based on title
export const searchMovies = async (title: string): Promise<Movie[]> => {
  try {
    const response = await fetch(`${API_URL}s=${title}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie search results");
    }
    const data = await response.json();
    return data?.Search || []; // Return an array of movies
  } catch (error) {
    console.error("Error fetching movie list:", error);
    return [];
  }
};

// Function to fetch detailed information about a specific movie by its ID
export const getMovieDetails = async (
  imdbID: string
): Promise<MovieDetailsData | null> => {
  try {
    const response = await fetch(`${API_URL}i=${imdbID}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data?.Response === "True" ? (data as MovieDetailsData) : null;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
