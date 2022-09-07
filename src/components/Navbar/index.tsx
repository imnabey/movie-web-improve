/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { utilsCss } from '../../styles/utils';
import { navbarCss } from './styles';

export const Navbar: FC = () => {
  return (
    <header css={navbarCss.navbarHeader}>
      <div css={utilsCss.container}>
        <nav css={navbarCss.navbarWrapper}>
          <Link to='/' css={navbarCss.navbarLogo}>
            Omdb
          </Link>

          <div
            css={navbarCss.navbarMenu}
          >
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/my-list'>My List</Link>
              </li>
            </ul>
          </div>

        </nav>
      </div>

    </header>
  );
};

export default Navbar;