/** @jsxImportSource @emotion/react */
import { FC } from 'react';

import { ILayout } from '../../../types';

import { layoutCss } from './styles';

import NavbarComponent from '../Navbar';
import FooterComponent from '../Footer';

export const Layout: FC<ILayout> = ({ children }) => {

  return (
    <div css={layoutCss.wrapper}>
      <NavbarComponent onChange={(e) => 'hello'} />
      <main>{children}</main>
      <FooterComponent onChange={(e) => 'hello'} />
    </div>
  );
};

export default Layout;