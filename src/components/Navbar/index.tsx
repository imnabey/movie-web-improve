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
    <header css={navbarCss.navbarHeader}>
      <div css={utilsCss.container}>
        <nav css={navbarCss.navbarWrapper}>
          <Link to='/' css={navbarCss.navbarLogo}>
            Omdb
          </Link>
          <button
            css={navbarCss.navbarBar}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <Reorder size={30} />
          </button>

          <div
            css={isNavExpanded ? navbarCss.navbarMenuExpand : navbarCss.navbarMenu}
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