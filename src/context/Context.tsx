import { ReactNode, createContext, useEffect, useState } from "react";
import IMovie from "../interfaces/IMovie";
import ITvShow from "../interfaces/ITvShow";
import axios from "axios";
import { useDebounce } from 'use-debounce';
const { VITE_API_KEY, VITE_API_BASE_URL } = import.meta.env;

export enum TabOption {
  MOVIE = "movie",
  TV = "tv",
}

interface IContextState {
  movies: IMovie[];
  tvShows: ITvShow[];
  searchQuery: string;
  selectedTab: TabOption;
  handleChangeSearchQuery: (value: string) => void;
  handleChangeSelectedTab: (value: TabOption) => void;
}

const initialState: IContextState = {
  movies: [],
  tvShows: [],
  searchQuery: "",
  selectedTab: TabOption.TV,
  handleChangeSearchQuery: () => null,
  handleChangeSelectedTab: () => null,
};

interface IContextProps {
  children: ReactNode;
}

export const Context = createContext(initialState);

const Provider: React.FC<IContextProps> = ({ children }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [tvShows, setTvShows] = useState<ITvShow[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<TabOption>(TabOption.TV);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 1000);

  const fetchData = async () => {
    if (searchQuery?.length > 2) {
      await axios
        .get(`${VITE_API_BASE_URL}/search/${selectedTab}`, {
          params: {
            api_key: VITE_API_KEY,
            language: "en-US",
            query: searchQuery,
          },
        })
        .then((res) => {
          if (selectedTab === TabOption.MOVIE) {
            setMovies(res?.data?.results);
          } else setTvShows(res?.data?.results);
        });
    } else {
      await axios
        .get(`${VITE_API_BASE_URL}/${selectedTab}/top_rated`, {
          params: {
            api_key: VITE_API_KEY,
            language: "en-US",
          },
        })
        .then((res) => {
          if (selectedTab === TabOption.MOVIE) {
            setMovies(res?.data?.results);
          } else setTvShows(res?.data?.results);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedTab, debouncedSearchQuery]);

  const handleChangeSearchQuery = (value: string) => {
    setSearchQuery(value);
  };

  const handleChangeSelectedTab = (value: TabOption) => {
    setSelectedTab(value);
  };

  const value = {
    movies,
    tvShows,
    searchQuery,
    selectedTab,
    setMovies,
    setTvShows,
    handleChangeSearchQuery,
    handleChangeSelectedTab,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
