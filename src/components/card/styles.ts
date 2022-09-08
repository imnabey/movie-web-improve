import { css } from '@emotion/react';

export const landCardCss = {
  wrapperImg: css`
    position: relative;
  `,
  wrapper: css`
    height: 300px;
    position: relative;

    .card-overlay{
      display: none;
    }
    
    &:hover{
      .card-overlay{
        display: block;
        padding: 30px;
        text-align: center;
        background:  rgb(201,201,201, .8);
        color: white;
        position: absolute;
        z-index: 100;
        height: 100%;
        top: 0;
        width: 100%;
        border-radius: 8px;
      }
    }`,

  overlayType: css`
  margin-bottom: 30px;
    font-weight: bold`,

  overlayTitle: css`
    font-weight: bold;
    font-size: 22px; 
    margin-bottom: 8px`,

  cardImg: css`
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
 `,

  wrapperSkeleton: css`
    padding: 15px;`,
};