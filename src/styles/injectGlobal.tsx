import { injectGlobal } from '@emotion/css';

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  h1{
    line-height: 38px;
    color: white;
  }

  h3{
    color: white;
  }

  a{
    text-decoration: none;
    color: white;
  }
  
  body{
    background: #141414;
    color: #b6b5b5;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
  }
`;