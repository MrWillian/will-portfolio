import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
  }

  #root {
    width: 100%;
    height: 100%;
    
    background-color: var(--base-color);
  }

  :root {
    --base-color: #333646;
    --base-dark: #252734;
    --base-light: #424657;

    --accent-color: #FFC25C;

    --grey1: #666874;
    --grey2: #BCBABC;
    --grey3: #9DA9CE;

    --white: #FFFFFF;
  }
`;
