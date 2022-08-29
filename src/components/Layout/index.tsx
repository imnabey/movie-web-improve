/** @jsxImportSource @emotion/react */
import { FC } from 'react';

import { ILayout } from '../../../types';
import NavbarComponent from '../Navbar';
import { layoutCss } from './styles';

export const Layout: FC<ILayout> = ({ children }) => {

  return (
    <div css={layoutCss.wrapper}>
      <NavbarComponent onChange={(e) => 'hello'} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;