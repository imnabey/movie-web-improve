/** @jsxImportSource @emotion/react */
import { FC, useContext, useEffect, useState } from 'react';
import { isEmpty, isEqual } from 'lodash';
import { Waypoint } from 'react-waypoint';
import { Link } from 'react-router-dom';
import { Info, Bookmark, BookmarkBorder } from '@emotion-icons/material';
import Skeleton from 'react-loading-skeleton';

import { MovieListCtx } from '../../contexts/MovieList';
import UserRandomServices from '../../services/api';
import { utilsCss } from '../../styles/utils';
import { homepageCss } from './styles';
import LandscapeCard from '../../components/card';
import { GridColumn, GridRow } from '../../styles/grid';
import LandscapeCardSkeleton from '../../components/card/Skeleton';
import { usePrevious } from '../../helpers';


export const Homepage: FC = () => {
  const movieContext = useContext(MovieListCtx);
  const [favorite, setFavorite] = useState<string[]>([]);
  const [clicked, setClicked] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
  });
  const prevFavorite = usePrevious(favorite);
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

  // first get
  useEffect(() => {
    const favoriteStorage = localStorage.getItem('imdbIdUpdate') ?? '';
    setFavorite(favoriteStorage.split(' '));
  }, []);

  useEffect(() => {
    if (!isEqual(prevFavorite, favorite) && clicked) {
      localStorage.setItem('imdbIdUpdate', favorite.toString().replace(/,/g, ' ').replace(/^\s+|\s+$/gm, ''));
    }
  }, [favorite]);

  const handleFavorite = (param: string, id: any) => {
    setClicked(true);
    if (param === 'add') {
      if (!favorite.includes(id)) {
        setFavorite(prevState => [...prevState, id]);
      }
    } else {
      const filtering = favorite.filter(favoItem => favoItem !== id);
      setFavorite(filtering);
    }
  };

  return (
    <>
      <div css={homepageCss.heroImg}>
        {isLoading ? <Skeleton height={600} /> : <img css={homepageCss.heroImgItem} src={!isEmpty(heroImg) && heroImg.Poster.replace('300', '800').replace('jpg', 'webp')} alt={heroImg.Title} />}
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
            !isEmpty(backupMovie) && backupMovie.map((movieItem: { Title: string, imdbID: string, Poster: string, Type: string, Year: string }) => (
              <GridColumn width={[12, 2]} p={['xl', 'm']} key={movieItem.imdbID}>

                <div css={homepageCss.wrapperCard}>
                  {favorite.includes(movieItem.imdbID) ?
                    <button onClick={() => handleFavorite('remove', movieItem.imdbID)} css={homepageCss.favorite}><Bookmark size="24" /></button> :
                    <button onClick={() => handleFavorite('add', movieItem.imdbID)} css={homepageCss.favorite}><BookmarkBorder size="24" /></button>
                  }
                  <Link to={`/detail/${movieItem.imdbID}`}>
                    <LandscapeCard pic={movieItem.Poster.replace('jpg', 'webp')} title={movieItem.Title} type={movieItem.Type} year={movieItem.Year} />
                  </Link>
                </div>

              </GridColumn>
            ))
          }

          {!isEmpty(backupMovie) && pagination.page < Number(movieContext?.totalPageList) ? (
            <Waypoint onEnter={handleLoadMore} />
          ) : (
              <></>)}

          {isLoading && (
            <LandscapeCardSkeleton cards={12} />
          )}
        </GridRow>
      </div>
    </>
  );
};

export default Homepage;