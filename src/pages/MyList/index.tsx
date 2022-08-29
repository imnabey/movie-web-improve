/** @jsxImportSource @emotion/react */
import { FC, useContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { Waypoint } from 'react-waypoint';
import { Link } from 'react-router-dom';

import { INavbar } from '../../../types';
import { MovieListCtx } from '../../contexts/MovieList';
import UserRandomServices from '../../services/api';
import { utilsCss } from '../../styles/utils';
import LandscapeCard from '../../components/card';
import { GridColumn, GridRow } from '../../styles/grid';
import LandscapeCardSkeleton from '../../components/card/Skeleton';

export const MyList: FC<INavbar> = () => {
  const movieContext = useContext(MovieListCtx);

  const [pagination, setPagination] = useState({
    page: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [backupMovie, setBackupMovie] = useState([] as any);

  const getMovieListData = async () => {
    setIsLoading(true);
    await movieContext?.getMovieData(`s=super&type=movie&page=${pagination.page}`).catch(console.error);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieListData().catch(console.error);
  }, []);

  useEffect(() => {
    if (!isEmpty(movieContext?.movieList)) {
      setBackupMovie(movieContext?.movieList);
    }
  }, [movieContext?.movieList]);

  const handleLoadMore = async () => {
    setIsLoading(true);

    const nextPage = pagination.page + 1;
    const randomUserData = await UserRandomServices.getAll(`s=super&type=movie&page=${nextPage}`);

    if (!isEmpty(movieContext?.movieList)) {
      setBackupMovie([
        ...backupMovie,
        ...randomUserData.data.Search,
      ]);
    }

    setPagination({ page: nextPage });

    setIsLoading(false);
  };

  return (
    <div css={utilsCss.container} >
      <h1>My List</h1>
      <GridRow wrap='wrap'>
        {isLoading && <LandscapeCardSkeleton cards={6} />}

        {
          !isEmpty(backupMovie) && backupMovie.map((movieItem: { Title: string, imdbID: string, Poster: string }) => (
            <GridColumn width={[12, 2]} p={['xs', 'm']} key={movieItem.imdbID}>
              <Link to={`/detail/${movieItem.imdbID}`}>
                <LandscapeCard pic={movieItem.Poster} title={movieItem.Title} />
              </Link>
            </GridColumn>
          ))
        }

        {!isEmpty(backupMovie) && pagination.page < Number(movieContext?.totalPageList) ? (
          <Waypoint onEnter={handleLoadMore} />
        ) : (
          <></>
        )}

      </GridRow>

      {isLoading && (
        <div className="text-center">
          Wait, Still Loading
        </div>
      )}
    </div>

  );
};

export default MyList;