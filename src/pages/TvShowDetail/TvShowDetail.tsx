import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ITvShow from "../../interfaces/ITvShow";
import "./tv-show-detail.css";
const { VITE_API_KEY, VITE_API_BASE_URL } = import.meta.env;

const TvShowDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tvShow, setTvShow] = useState<ITvShow>();

  const fetchData = async () => {
    await axios
      .get(
        `${VITE_API_BASE_URL}/tv/${id}?api_key=${VITE_API_KEY}`
      )
      .then((res) => {
        setTvShow(res?.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="tv-show-detail">
      <button onClick={() => navigate(-1)} className="tv-show-detail-back-button"> {"<<"} BACK</button>
      <img className="tv-show-detail-image" src={`https://image.tmdb.org/t/p/w200/${tvShow?.poster_path}`} />
      <h2>{tvShow?.original_name}</h2>
      <p>{tvShow?.overview}</p>
    </div>
  );
};

export default TvShowDetail;