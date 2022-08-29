import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
// import './App.css';
import './styles/injectGlobal';
import 'react-loading-skeleton/dist/skeleton.css';

import { INavbar } from '../types';
import MovieListContext from './contexts/MovieList';
import Detail from './pages/Detail';
import MyList from './pages/MyList';
import Home from './pages/Homepage';
import Layout from './components/Layout';

export const App: FC<INavbar> = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <MovieListContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/my-list" element={<MyList />} />
            </Routes>
          </Layout>
        </MovieListContext>
      </BrowserRouter>
    </SkeletonTheme>

  );
};

export default App;