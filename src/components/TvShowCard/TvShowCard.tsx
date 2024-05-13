import { useNavigate } from "react-router";
import ITvShow from "../../interfaces/ITvShow";
import "./tv-show-card.css";

interface TvShowProps {
  tvShow: ITvShow;
}

const TvShowCard = ({ tvShow }: TvShowProps) => {
  const navigate = useNavigate();

  return (
    <div className="tv-card" onClick={() => navigate(`/tv-show/${tvShow?.id}`)}>
      <img className="tv-card-image" src={`https://image.tmdb.org/t/p/w200/${tvShow.poster_path}`} />
      <p>{tvShow?.original_name}</p>
    </div>
  );
};

export default TvShowCard;
