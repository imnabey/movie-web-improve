import { css } from '@emotion/react';

export const navbarCss = {
  navbarWrapper: css`
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;`,

  navbarHeader: css`
  z-index: 20;
  position: relative;`,

  navbarLogo: css`
  font-size: 25px;
  font-weight: 600;
  `,

  navbarBar: css`
  display: block;    
  color: white;
  position: absolute;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  @media only screen and (min-width: 768px) {
    display: none;
  }
  `,

  navbarMenu: css`
  margin-left: auto;
  font-weight: bold;

  ul{
    display: none;
    
    @media only screen and (min-width: 768px) {
      display: flex;
      padding: 0;
    }
  }

  li{
    list-style-type: none;
    margin: 0 1rem;
  }`,

  navbarMenuExpand: css`
  font-weight: bold;
  
  ul{
    display: block;
    flex-direction: column;
    position: absolute;
    width: 100%;
    left: 0;
    top: 64px;
    height: calc(100vh - 60px);
    background-color: white;
  }`,
};
