import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ITvShow from "../../interfaces/ITvShow";
import "./tv-show-detail.css";

const TvShowDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tvShow, setTvShow] = useState<ITvShow>();

  const fetchData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=3adddc6450cee021ab92328ed2bbd662`
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