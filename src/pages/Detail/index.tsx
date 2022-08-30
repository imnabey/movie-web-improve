/** @jsxImportSource @emotion/react */
import { FC, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BookmarkBorder, Share, Bookmark } from '@emotion-icons/material';

import { IDetail } from '../../../types';
import { MovieListCtx } from '../../contexts/MovieList';
import { detailCss } from './styles';
import { utilsCss } from '../../styles/utils';
import { GridColumn, GridRow } from '../../styles/grid';
import Avatar from '../../assets/images/avatar.webp';
import Skeleton from 'react-loading-skeleton';

export const Detail: FC<IDetail> = () => {
  const getIdDetail = useLocation().pathname.split('/').pop() ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [saveToggle, setSaveToggle] = useState(false);
  const [imdbIdLocal, setImdbIdLocal] = useState(['']);

  const movieContext = useContext(MovieListCtx);

  const getMovieListData = async () => {
    setIsLoading(true);
    await movieContext?.getMovieData(`i=${getIdDetail ?? ''}`).catch(console.error);
    setIsLoading(false);
  };


  useEffect(() => {
    getMovieListData().catch(console.error);
  }, []);

  useEffect(() => {
    const getImdbId = localStorage.getItem('imdbId') ?? '';
    const getImdbUpdate = localStorage.getItem('imdbIdUpdate') ?? '';
    setImdbIdLocal(getImdbUpdate.split(' ') || []);

    if (getImdbUpdate) {
      if (getImdbUpdate.split(' ').includes(getIdDetail)) {
        setSaveToggle(true);
      }
    } else if (getImdbId) {
      if (getImdbId.split(' ').includes(getIdDetail)) {
        setSaveToggle(true);
      }
    } else {
      setSaveToggle(false);
    }
  }, []);


  const convertStringtoArr = (param: any) => {
    return param.split(', ');
  };

  const handleSave = () => {
    const getImdbId = localStorage.getItem('imdbId') ?? '';
    const getImdbUpdate = localStorage.getItem('imdbIdUpdate') ?? '';
    setSaveToggle(!saveToggle);

    if (getImdbUpdate) {
      localStorage.setItem('imdbIdUpdate', `${getImdbUpdate} ${getIdDetail}`);
    } else if (getImdbId) {
      localStorage.setItem('imdbIdUpdate', `${getImdbId} ${getIdDetail}`);
    } else {
      localStorage.setItem('imdbId', `${getIdDetail}`);
    }

    if (saveToggle) {
      // remove
      const arrayRemove = (arr: string[], value: string) => {
        return arr.filter((ele: any) => {
          return ele !== value;
        });
      };

      const result = arrayRemove(imdbIdLocal, getIdDetail);
      const resultToString = result.toString().replace(/,/g, ' ');

      localStorage.setItem('imdbIdUpdate', resultToString);
    }
  };

  return (
    <div css={detailCss.detail} >
      {isLoading ? <Skeleton height={600} /> : <img css={detailCss.detailPoster} alt={movieContext?.movieDetail.Title} src={movieContext?.movieDetail.Poster && movieContext?.movieDetail.Poster.replace('300', '1000').replace('jpg', 'webp')} />}
      <div css={utilsCss.container}>
        <div css={detailCss.detailItem}>
          <GridRow wrap='wrap'>
            <GridColumn width={[12, 3]}>
              <div css={detailCss.detailItemleft}>
                {isLoading ? <Skeleton height={400} width={250} /> : <img css={detailCss.detailMiniPoster} alt={movieContext?.movieDetail.Title} src={movieContext?.movieDetail.Poster && movieContext?.movieDetail.Poster.replace('jpg', 'webp')} />}
                <div css={utilsCss.flex}>
                  <div css={detailCss.detailListItemVal}>{isLoading ? <Skeleton /> : movieContext?.movieDetail.imdbRating}</div><div >Ratings</div>
                </div>
                <div css={utilsCss.flex}>
                  <div css={detailCss.detailListItemVal}>{isLoading ? <Skeleton /> : movieContext?.movieDetail.imdbVotes}</div><div >Votes</div>
                </div>
              </div>
            </GridColumn>
            <GridColumn width={[12, 6]} px={['xs', 'xl']}>
              <h1>{isLoading ? <Skeleton width={600} /> : movieContext?.movieDetail.Title}</h1>

              <div css={detailCss.detailShare}>
                {isLoading ? <Skeleton height={24} width={24} /> : <button css={detailCss.detailSave} onClick={handleSave}>{saveToggle ? <Bookmark size='30' /> : <BookmarkBorder size='30' />}</button>}
                {isLoading ? <Skeleton height={24} width={24} /> : <Share size='30' />}
              </div>

              <div css={detailCss.detailDesc}> {isLoading ? <Skeleton /> : movieContext?.movieDetail.Plot}</div>
              <h3 css={utilsCss.subTitle}>{isLoading ? <Skeleton /> : 'Details'}</h3>

              <ul css={utilsCss.listUnstyled}>
                <li css={detailCss.detailListItem}>
                  <GridRow wrap='wrap'>
                    <GridColumn width={[12, 4]}>
                      <div css={detailCss.detailListItemTitle}>{isLoading ? <Skeleton /> : 'Genres'}</div>
                    </GridColumn>
                    <GridColumn width={[12, 8]}>
                      {isLoading ? <Skeleton /> : movieContext?.movieDetail.Title}
                    </GridColumn>
                  </GridRow>
                </li>
                <li css={detailCss.detailListItem}>
                  <GridRow wrap='wrap'>
                    <GridColumn width={[12, 4]} >
                      <div css={detailCss.detailListItemTitle}>
                        {isLoading ? <Skeleton /> : 'Country of Region'}
                      </div>
                    </GridColumn>
                    <GridColumn width={[12, 8]}>
                      {isLoading ? <Skeleton /> : movieContext?.movieDetail.Title}
                    </GridColumn>
                  </GridRow>
                </li>
                <li css={detailCss.detailListItem}>
                  <GridRow wrap='wrap'>
                    <GridColumn width={[12, 4]}>
                      <div css={detailCss.detailListItemTitle}>{isLoading ? <Skeleton /> : 'Runtime'}</div>
                    </GridColumn>
                    <GridColumn width={[12, 8]}>
                      {isLoading ? <Skeleton /> : movieContext?.movieDetail.Title}
                    </GridColumn>
                  </GridRow>
                </li>
                <li css={detailCss.detailListItem}>
                  <GridRow wrap='wrap'>
                    <GridColumn width={[12, 4]}>
                      <div css={detailCss.detailListItemTitle}> {isLoading ? <Skeleton /> : 'Released'}</div>
                    </GridColumn>
                    <GridColumn width={[12, 8]}>
                      {isLoading ? <Skeleton /> : movieContext?.movieDetail.Title}
                    </GridColumn>
                  </GridRow>
                </li>
              </ul>
            </GridColumn>

            <GridColumn width={[12, 3]}>
              <h3 css={utilsCss.subTitle}> {isLoading ? <Skeleton width={300} /> : 'Cast & Crew'}</h3>
              {movieContext?.movieDetail.Actors && convertStringtoArr(movieContext?.movieDetail.Actors).map((actor: string) => (
                <div key={actor} css={detailCss.wrapAvatar}>
                  {isLoading ? <Skeleton circle height={60} width={60} /> : <img css={detailCss.avatarImg} src={Avatar} alt={actor} />}
                  {isLoading ? <Skeleton width={100} height={30} /> : <div css={detailCss.detailListItemTitle}>{actor}</div>}
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