/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { landCardCss } from './styles';

export interface ILandCardSkeleton {
  cards: number;
}

export const LandscapeCardSkeleton: FC<ILandCardSkeleton> = ({ cards }) => {
  return (
    <>
      {Array(cards).fill(0).map((_, index) => (
        <div css={landCardCss.wrapperSkeleton} key={index}>
          <Skeleton width={178} height={300} />
        </div>
      ))}
    </>

  );
};

export default LandscapeCardSkeleton;