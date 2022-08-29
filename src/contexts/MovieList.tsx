import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { catchHandler } from '../services/http';
import UserRandomServices from '../services/api';

interface MovieContextInterface {
  movieList: Array<{ Title: string, imdbID: string }>;
  getMovieData: (param: any) => Promise<void>;
  movieDetail: { Title: string, Plot: string, Poster: string, imdbRating: string, Actors: string };
  setMovieDetail: any;
  totalPageList: string;
}

export const MovieListCtx = createContext<MovieContextInterface | null>(null);

const MovieList = ({ children }: any) => {
  const getPath = useLocation().pathname;
  const [movieList, setMovieList] = useState([]) as any;
  const [movieDetail, setMovieDetail] = useState({}) as any;
  const [totalPageList, setTotalPageList] = useState(0) as any;

  const getMovieData = async (param: any) => {
    try {
      const randomUserData = await UserRandomServices.getAll(param);
      const searchList = randomUserData;
      if (getPath.includes('detail')) {
        setMovieDetail(searchList.data);
      } else {
        setMovieList(searchList.data.Search);
        setTotalPageList(searchList.data.totalResults || 1);
      }
    } catch (error: any) {
      catchHandler(error);
    }
  };

  return (
    <MovieListCtx.Provider
      value={{
        getMovieData,
        movieList,
        movieDetail,
        setMovieDetail,
        totalPageList,
      }}>
      {children}
    </MovieListCtx.Provider>
  );
};


export default MovieList;
