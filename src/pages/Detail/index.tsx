/** @jsxImportSource @emotion/react */
import { FC, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BookmarkBorder, Share } from '@emotion-icons/material';

import { IDetail } from '../../../types';
import { MovieListCtx } from '../../contexts/MovieList';
import { detailCss } from './styles';
import { utilsCss } from '../../styles/utils';
import { GridColumn, GridRow } from '../../styles/grid';
import Avatar from '../../assets/images/avatar.webp';
import Skeleton from 'react-loading-skeleton';

export const Detail: FC<IDetail> = () => {
  const getIdDetail = useLocation().pathname.split('/').pop();
  const [isLoading, setIsLoading] = useState(false);

  const movieContext = useContext(MovieListCtx);

  const getMovieListData = async () => {
    setIsLoading(true);
    await movieContext?.getMovieData(`i=${getIdDetail ?? ''}`).catch(console.error);
    setIsLoading(false);
  };


  useEffect(() => {
    getMovieListData().catch(console.error);
  }, []);


  const convertStringtoArr = (param: any) => {
    return param.split(', ');
  };

  return (
    <div css={detailCss.detail} >
      {isLoading ? <Skeleton height={600} /> : <img css={detailCss.detailPoster} alt={movieContext?.movieDetail.Title} src={movieContext?.movieDetail.Poster && movieContext?.movieDetail.Poster.replace('300', '2000')} />}
      <div css={utilsCss.container}>
        <div css={detailCss.detailItem}>
          <GridRow wrap='wrap'>
            <GridColumn width={[12, 3]}>
              <div css={detailCss.detailItemleft}>
                {isLoading ? <Skeleton height={400} width={250} /> : <img css={detailCss.detailMiniPoster} alt={movieContext?.movieDetail.Title} src={movieContext?.movieDetail.Poster && movieContext?.movieDetail.Poster} />}

                <div>{isLoading ? <Skeleton /> : movieContext?.movieDetail.imdbRating}</div>
              </div>

            </GridColumn>
            <GridColumn width={[12, 6]} p={['xs', 's']}>
              <h1>{isLoading ? <Skeleton width={600} /> : movieContext?.movieDetail.Title}</h1>
              {isLoading ? <Skeleton height={24} width={24} /> : <BookmarkBorder size="24" />}
              {isLoading ? <Skeleton height={24} width={24} /> : <Share size="24" />}
              <div> {isLoading ? <Skeleton /> : movieContext?.movieDetail.Plot}</div>
              <h3>{isLoading ? <Skeleton /> : 'Details'}</h3>

              <ul css={detailCss.detailList}>
                <li css={detailCss.detailListItem}>
                  <GridRow wrap='wrap'>
                    <GridColumn width={[12, 6]}>
                      {isLoading ? <Skeleton /> : 'Genres'}
                    </GridColumn>
                    <GridColumn width={[12, 6]}>
                      {isLoading ? <Skeleton /> : movieContext?.movieDetail.Title}
                    </GridColumn>
                  </GridRow>
                </li>
                <li css={detailCss.detailListItem}>
                  <GridRow wrap='wrap'>
                    <GridColumn width={[12, 6]}>
                      {isLoading ? <Skeleton /> : 'Country of Region'}
                    </GridColumn>
                    <GridColumn width={[12, 6]}>
                      {isLoading ? <Skeleton /> : movieContext?.movieDetail.Title}
                    </GridColumn>
                  </GridRow>
                </li>
                <li css={detailCss.detailListItem}>
                  <GridRow wrap='wrap'>
                    <GridColumn width={[12, 6]}>
                      {isLoading ? <Skeleton /> : 'Runtime'}
                    </GridColumn>
                    <GridColumn width={[12, 6]}>
                      {isLoading ? <Skeleton /> : movieContext?.movieDetail.Title}
                    </GridColumn>
                  </GridRow>
                </li>
                <li css={detailCss.detailListItem}>
                  <GridRow wrap='wrap'>
                    <GridColumn width={[12, 6]}>
                      {isLoading ? <Skeleton /> : 'Released'}
                    </GridColumn>
                    <GridColumn width={[12, 6]}>
                      {isLoading ? <Skeleton /> : movieContext?.movieDetail.Title}
                    </GridColumn>
                  </GridRow>
                </li>
              </ul>
            </GridColumn>

            <GridColumn width={[12, 3]}>
              <h3>{isLoading ? <Skeleton width={300} /> : 'Cast & Crew'}</h3>
              {movieContext?.movieDetail.Actors && convertStringtoArr(movieContext?.movieDetail.Actors).map((actor: string) => (
                <div key={actor} css={detailCss.wrapAvatar}>
                  {isLoading ? <Skeleton circle height={60} width={60} /> : <img css={detailCss.avatarImg} src={Avatar} alt={actor} />}
                  {isLoading ? <Skeleton width={100} height={30} /> : <div>{actor}</div>}

                </div>
              ))}
            </GridColumn>
          </GridRow>
        </div>
      </div>
    </div>
  );
};

export default Detail;