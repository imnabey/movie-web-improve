/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { Info } from '@emotion-icons/material';

import { ILandCard } from '../../../types';
import { landCardCss } from './styles';

export const LandscapeCard: FC<ILandCard> = ({ pic, title, type, year }) => {
  return (
    <div css={landCardCss.wrapper}>
      <div css={landCardCss.wrapperImg}>
        <img css={landCardCss.cardImg} src={pic.replace('300', '400')} alt={title} />
      </div>

      <div className="card-overlay">
        <div css={landCardCss.overlayTitle}>
          {title}
        </div>
        <div css={landCardCss.overlayType}>
          {type},{year}
        </div>

        <Info size="32" />
      </div>
    </div>
  );
};

export default LandscapeCard;