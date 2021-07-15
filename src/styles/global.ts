import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #ffffff;
    --background: #F0F8FF;

    --gray-50: #f5f5f8;
    --gray-100: #ececf3;
    --gray-300: #a8a8b3;
    --gray-800: #424249;
    --gray-850: #1f2729;
    --gray-900: #121214;

    --blue: #142f69;
    --blue-light: #0079f2;
  }

  #root {
    padding: 10px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: larger;
  }

  html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 1080px) {
    font-size: 87.5%;
  }
}
`;
