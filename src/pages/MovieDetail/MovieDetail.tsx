import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import IMovie from "../../interfaces/IMovie";
import "./movie-detail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<IMovie>();

  const fetchData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3adddc6450cee021ab92328ed2bbd662`
      )
      .then((res) => {
        setMovie(res?.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="movie-detail">
      <button onClick={() => navigate(-1)} className="movie-detail-back-button"> {"<<"} BACK</button>
      <img className="movie-detail-image" src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`} />
      <h2>{movie?.title}</h2>
      <p>{movie?.overview}</p>
    </div>
  );
};

export default MovieDetail;
