import { css } from '@emotion/react';

export const navbarCss = {
  navbarWrapper: css`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0.5rem 0rem;
  color: white;
  box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);`,

  navbarBar: css`
  display: none;

  @media screen and (max-width: 550px) {
    display: block
  }
  `,

  navbarMenu: css`
  margin-left: auto;

  ul{
    display: flex;
    padding: 0;

    @media screen and (max-width: 550px) {
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      height: calc(100vh - 60px);
      background-color: white;
      border-top: 1px solid black;
      display: none;
    }
  }

  li{
    list-style-type: none;
    margin: 0 1rem;
  }`,

  navbarMenuExpand: css`
  ul{
    display: block;
  }`,
};

export const errorCss = css({
  color: 'red',
  fontWeight: 'bold',
});