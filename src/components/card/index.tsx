/** @jsxImportSource @emotion/react */
import { FC } from 'react';

import { ILandCard } from '../../../types';
import { landCardCss } from './styles';

export const LandscapeCard: FC<ILandCard> = ({ pic, title }) => {
  return (
    <div css={landCardCss.wrapper}>
      <img css={landCardCss.cardImg} src={pic.replace('300', '400')} alt={title} />
    </div>
  );
};

export default LandscapeCard;