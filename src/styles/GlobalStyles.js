import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --darkGrey: #bfbfbf;
    --green: #49E20E;
  }
  * {
  box-sizing: border-box;
  }
  html {
    background-color: var(--white);
    font-size: 10px;
  
    @media only screen and (max-width: 450px) {
        font-size: 8px;
    }
    @media only screen and (max-width: 350px) {
        font-size: 6px;
    }
  }
    
    
  }

  body {
    font-size: 2rem;
    box-sizing: border-box;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
    &:focus {
      outline: none;
  }
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
