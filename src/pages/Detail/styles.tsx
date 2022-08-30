import { css } from '@emotion/react';

export const detailCss = {
  detailPoster: css`
    height: 250px;
    width: 100%;
    object-position: center top;
    object-fit: cover;
    mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0.95,0.95,0.95,0.95) 100%);
    -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0.95,0.95,0.95,0.95) 100%); 
    
    @media only screen and (min-width: 768px) {
      height: 450px;
    } `
  ,

  detailSave: css`
    background: transparent;
    border: none;
    color: white;
    padding: 0;`,

  detailDesc: css`
    margin-bottom: 40px;
  `,

  detailListItemTitle: css`
    font-weight: bold;
    color: white;
    font-size: 16px;

    @media only screen and (min-width: 768px) {
      font-size: 18px;
    }
  `,

  avatarImg: css`
    height: 60px;
    width: 60px;
    margin-right: 20px;
  `,

  detailShare: css`
  margin-bottom: 20px;
  display: flex;
  `,

  detailListItem: css`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
  `,

  wrapAvatar: css`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  `,

  detail: css`
  position: relative`,

  detailItem: css`
  margin-top: -100px;`,

  detailItemleft: css`
  `,

  detailListItemVal: css`  
  font-weight: bold;
  color: white;
  margin-right: 10px;
  font-size: 16px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
  `,

  detailMiniPoster: css`
  height: 400px;
  margin-bottom: 20px;
  border-radius: 8px;
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
  `,
};
