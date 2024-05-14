import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import IMovie from "../../interfaces/IMovie";
import "./movie-detail.css";
const { VITE_API_KEY, VITE_API_BASE_URL } = import.meta.env;

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<IMovie>();

  const fetchData = async () => {
    await axios
      .get(
        `${VITE_API_BASE_URL}/movie/${id}?api_key=${VITE_API_KEY}`
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
