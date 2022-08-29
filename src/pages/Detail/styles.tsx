import { css } from '@emotion/react';

export const detailCss = {
  detailPoster: css`
    height: 450px;
    width: 100%;
    object-position: center top;
    object-fit: cover;
    mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0.95,0.95,0.95,0.95) 100%);
    -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0.95,0.95,0.95,0.95) 100%); `
  ,

  avatarImg: css`
    height: 60px;
    width: 60px;
    margin-right: 10px;
  `,

  detailList: css`
  padding-left: 0;
  list-style: none;
  `,

  detailListItem: css`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid white;
  `,

  wrapAvatar: css`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  `,

  detail: css`
  position: relative`,

  detailItem: css`
  position: absolute;
  top: -100px;`,

  detailItemleft: css`
  // max-width: 200px;
  // position: absolute;
  `,

  detailMiniPoster: css`
  height: 400px;
  border-radius: 8px;
  `
  ,
};