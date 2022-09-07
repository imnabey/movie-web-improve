/** @jsxImportSource @emotion/react */
import { FC } from 'react';

import { ILayout } from '../../../types';

import { layoutCss } from './styles';

import NavbarComponent from '../Navbar';
import FooterComponent from '../Footer';

export const Layout: FC<ILayout> = ({ children }) => {

  return (
    <div css={layoutCss.wrapper}>
      <NavbarComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
};

export default Layout;