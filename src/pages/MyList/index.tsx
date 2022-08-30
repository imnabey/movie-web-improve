/** @jsxImportSource @emotion/react */
import { FC, useContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

import { INavbar } from '../../../types';
import { MovieListCtx } from '../../contexts/MovieList';
import { utilsCss } from '../../styles/utils';
import LandscapeCard from '../../components/card';
import { myListCss } from './styles';
import { GridColumn, GridRow } from '../../styles/grid';
import LandscapeCardSkeleton from '../../components/card/Skeleton';

export const MyList: FC<INavbar> = () => {
  const movieContext = useContext(MovieListCtx);

  const [isLoading, setIsLoading] = useState(false);
  const [backupMovie, setBackupMovie] = useState([] as any);


  const getMovieListData = async () => {
    setIsLoading(true);
    await movieContext?.getMovieData(`s=love&type=movie&page=${1}`).catch(console.error);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieListData().catch(console.error);
  }, []);

  useEffect(() => {
    if (!isEmpty(movieContext?.movieList)) {
      const getImdbId = localStorage.getItem('imdbId') ?? '';
      const getImdbUpdate = localStorage.getItem('imdbIdUpdate') ?? '';
      const getIdToArray = getImdbUpdate ? getImdbUpdate.split(' ') : getImdbId ? getImdbId.split(' ') : [];

      const result = movieContext?.movieList.filter((value: any) => getIdToArray.includes(value.imdbID));
      setBackupMovie(result);
    }
  }, [movieContext?.movieList]);

  return (
    <div css={myListCss.listWrapper}>
      <div css={utilsCss.container}>
        <h1>My List</h1>
        <GridRow wrap='wrap'>
          {
            !isEmpty(backupMovie) ? backupMovie.map((movieItem: { Title: string, imdbID: string, Poster: string }) => (
              <GridColumn width={[12, 2]} p={['xl', 'm']} key={movieItem.imdbID}>
                <Link to={`/detail/${movieItem.imdbID}`}>
                  <LandscapeCard pic={movieItem.Poster} title={movieItem.Title} />
                </Link>
              </GridColumn>
            )) :
              <div>
                Ups Kosong!
              </div>

          }

          {isLoading && (
            <LandscapeCardSkeleton cards={6} />
          )}
        </GridRow>
      </div>
    </div>


  );
};

export default MyList;