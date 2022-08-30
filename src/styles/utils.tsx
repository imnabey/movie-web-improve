import { css } from '@emotion/react';

export const utilsCss = {
  container: css`
    max-width: 1280px;
    position: relative;
    margin: 0 auto;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 100%;
  `,

  flex: css`
  display: flex;
  align-items: center;`,

  listUnstyled: css`
  padding-left: 0;
  list-style: none;
  `,

  title: css`
  font-size: 30px;
  line-height: 38px;
  `,

  subTitle: css`
  font-size: 20px;
  font-weight: bold;
  line-height: 14px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
  `,

};