/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { GridColumn, GridRow } from '../../styles/grid';
import { Facebook, Mail } from '@emotion-icons/material';

import { INavbarx } from '../../../types';
import { utilsCss } from '../../styles/utils';
import { footerCss } from './styles';

export const Footer: FC<INavbarx> = ({ onChange }) => {

  return (
    <footer css={footerCss.footerWrapper}>
      <div css={utilsCss.container}>
        <div css={footerCss.socialMedia}>
          <Facebook size="30" />
          <Mail size="30" />
        </div>

        <GridRow wrap={'wrap'}>
          <GridColumn width={[12, 3]}>
            <ul css={utilsCss.listUnstyled}>
              <li>
                Audio Description
              </li>
              <li>
                Investor Relations
              </li>
              <li>
                Legal Notices
              </li>
            </ul>
          </GridColumn>
          <GridColumn width={[12, 3]}>
            <ul css={utilsCss.listUnstyled}>
              <li>
                Help Center
              </li>
              <li>
                Jobs
              </li>
              <li>
                Cookie Preferences
              </li>
            </ul>
          </GridColumn>
          <GridColumn width={[12, 3]}>
            <ul css={utilsCss.listUnstyled}>
              <li>
                Gift Cards
              </li>
              <li>
                Terms of Use
              </li>
              <li>
                Corporate Information
              </li>
            </ul>
          </GridColumn>
          <GridColumn width={[12, 3]}>
            <ul css={utilsCss.listUnstyled}>
              <li>
                Media Center
              </li>
              <li>
                Privacy
              </li>
              <li>
                Contact Us
              </li>
            </ul>
          </GridColumn>
        </GridRow>
        <div css={footerCss.footerCopy}>
          2022 © Omdb Ltd. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;