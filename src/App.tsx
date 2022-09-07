import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import MovieListContext from './contexts/MovieList';
import Layout from './components/Layout';
import './styles/injectGlobal';

const Home = lazy(async () => ({ default: (await import('./pages/Homepage')).Homepage }));
const Detail = lazy(async () => ({ default: (await import('./pages/Detail')).Detail }));
const MyList = lazy(async () => ({ default: (await import('./pages/MyList')).MyList }));

export const App: FC = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <MovieListContext>
          <Layout>
            <Suspense>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/my-list" element={<MyList />} />
              </Routes>
            </Suspense>
          </Layout>
        </MovieListContext>
      </BrowserRouter>
    </SkeletonTheme>

  );
};

export default App;