/** @jsxImportSource @emotion/react */
import { FC, useState } from 'react';
import { Reorder } from '@emotion-icons/material';
import { Link } from 'react-router-dom';

import { INavbarx } from '../../../types';
import { utilsCss } from '../../styles/utils';
import { navbarCss } from './styles';

export const Navbar: FC<INavbarx> = ({ onChange }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header css={utilsCss.container}>
      <nav css={navbarCss.navbarWrapper}>
        <Link to='/'>
          Netflix
        </Link>
        <button
          css={navbarCss.navbarBar}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <Reorder />
        </button>

        <div
          css={isNavExpanded ? navbarCss.navbarMenuExpand : navbarCss.navbarMenu}
        >
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/my-list'>My List</a>
            </li>
          </ul>
        </div>
      </nav>
    </header >
  );
};

export default Navbar;