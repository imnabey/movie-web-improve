import { css } from '@emotion/react';

export const homepageCss = {
  heroImg: css`
  margin-bottom: 30px;
  margin-top: -80px;

    @media only screen and (min-width: 768px) {
      margin-bottom: 50px;
      margin-top: -80px;
    }`,

  heroImgDesc: css`
  position: absolute;
  z-index: 10;
  bottom: 100px;

  @media only screen and (min-width: 768px) {
    bottom: 200px;
  }
  `,

  heroImgDescType: css`
  margin-right: 10px;
  // color: white;
  text-transform: capitalize;
  font-weight: bold;`,

  heroImgDescYear: css` 
  // color: white;
  text-transform: capitalize;
  font-weight: bold;`,

  heroImgDescText: css` 
  margin-left: 10px;`,

  heroImgDescTitle: css`
  font-size: 40px;
  margin: 15px 0;
  
  @media only screen and (min-width: 768px) {
    font-size: 50px;
    margin-top: 20px;
    margin-bottom: 40px;
  }`,

  heroImgDescButton: css`
  font-size: 15px;
  padding: 10px 25px;
  border-radius: 8px;
  font-weight: bold;
  width: fit-content;
  border-width: 1px;
  border-style: none;
  display: flex;
  align-items: center;
  background-color: rgba(109, 109, 110, 0.7);
  color: white;
  
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }`,

  wrapperCard: css`
  position: relative;
  `,

  favorite: css`
    position: absolute;
    right: 10px;
    background: transparent;
    color: white;
    border: none;
    z-index: 10000;
    top: 10px;
  `,

  heroImgItem: css`
  height: 400px;
  width: 100%;
  // object-position: center top;
  object-fit: cover;
  mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0.95,0.95,0.95,0.95) 100%);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0.95,0.95,0.95,0.95) 100%); 

  @media only screen and (min-width: 768px) {
    height: 600px;
  }
`,
};