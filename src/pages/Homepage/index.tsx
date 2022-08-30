/** @jsxImportSource @emotion/react */
import { FC, useContext, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { Waypoint } from 'react-waypoint';
import { Link } from 'react-router-dom';
import { Info } from '@emotion-icons/material';

import { INavbar } from '../../../types';
import { MovieListCtx } from '../../contexts/MovieList';
import UserRandomServices from '../../services/api';
import { utilsCss } from '../../styles/utils';
import { homepageCss } from './styles';
import LandscapeCard from '../../components/card';
import { GridColumn, GridRow } from '../../styles/grid';
import LandscapeCardSkeleton from '../../components/card/Skeleton';
import Skeleton from 'react-loading-skeleton';

export const Homepage: FC<INavbar> = () => {
  const movieContext = useContext(MovieListCtx);

  const [pagination, setPagination] = useState({
    page: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [backupMovie, setBackupMovie] = useState([] as any);
  const [heroImg, setHeroImg] = useState({} as any);

  const getMovieListData = async () => {
    setIsLoading(true);
    await movieContext?.getMovieData(`s=love&type=movie&page=${pagination.page}`).catch(console.error);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieListData().catch(console.error);
  }, []);

  useEffect(() => {
    if (!isEmpty(movieContext?.movieList)) {
      setBackupMovie(movieContext?.movieList);
      setHeroImg(movieContext?.movieList[0]);
    }
  }, [movieContext?.movieList]);

  const handleLoadMore = async () => {
    setIsLoading(true);

    const nextPage = pagination.page + 1;
    const randomUserData = await UserRandomServices.getAll(`s=love&type=movie&page=${nextPage}`);

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
    <>
      <div css={homepageCss.heroImg}>
        {isLoading ? <Skeleton height={600} /> : <img css={homepageCss.heroImgItem} src={!isEmpty(heroImg) && heroImg.Poster.replace('300', '2000')} alt={heroImg.Title} />}
        <div css={utilsCss.container} >
          <div css={homepageCss.heroImgDesc}>

            {isLoading ?
              <Skeleton count={2} /> :
              <div css={utilsCss.flex}>
                <div css={homepageCss.heroImgDescType}>{heroImg.Type}</div>
                <div css={homepageCss.heroImgDescYear}>{heroImg.Year}</div>
              </div>
            }

            {isLoading ?
              <Skeleton height={30} width={500} /> :
              <h3 css={homepageCss.heroImgDescTitle}>{heroImg.Title}</h3>
            }

            {isLoading ?
              <Skeleton height={30} width={500} /> :
              <Link to={`/detail/${heroImg.imdbID as string}`} css={homepageCss.heroImgDescButton}> <Info size='30' /><div css={homepageCss.heroImgDescText}>More Info</div></Link>
            }

          </div>
        </div>

      </div>
      <div css={utilsCss.container} >
        <h1>All Movies</h1>
        <GridRow wrap='wrap'>
          {
            !isEmpty(backupMovie) && backupMovie.map((movieItem: { Title: string, imdbID: string, Poster: string }) => (
              <GridColumn width={[12, 2]} p={['xl', 'm']} key={movieItem.imdbID}>
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

          {isLoading && (
            <LandscapeCardSkeleton cards={12} />
          )}
        </GridRow>
      </div>
    </>


  );
};

export default Homepage;