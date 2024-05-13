import { useNavigate } from "react-router";
import IMovie from "../../interfaces/IMovie";
import "./movie-card.css";

interface MovieProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: MovieProps) => {
  const navigate = useNavigate();
  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie?.id}`)}>
      <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
      <p>{movie?.title}</p>
    </div>
  );
};

export default MovieCard;
