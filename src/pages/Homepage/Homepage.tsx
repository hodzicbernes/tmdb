import { useContext } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import TvShowCard from "../../components/TvShowCard/TvShowCard";
import InputField from "../../components/InputField/InputField";
import "./homepage.css";
import { Context, TabOption } from "../../context/Context";

const Homepage = () => {
  const { selectedTab, movies, handleChangeSelectedTab, tvShows } =
    useContext(Context);

  return (
    <div className="homepage-container">
      <div>
        <button className={`tab-button ${selectedTab === TabOption.MOVIE ? "active" : ""}`} onClick={() => handleChangeSelectedTab(TabOption.MOVIE)}>MOVIES</button>
        <button className={`tab-button ${selectedTab === TabOption.TV ? "active" : ""}`} onClick={() => handleChangeSelectedTab(TabOption.TV)}>TV SHOWS</button>
      </div>
      <InputField />
      <div className="card-grid">
        { selectedTab === TabOption.MOVIE ? movies?.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        )): 
        tvShows?.map((movie, index) => (
          <TvShowCard key={index} tvShow={movie} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
