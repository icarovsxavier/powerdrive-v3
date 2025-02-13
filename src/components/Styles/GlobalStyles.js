import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --cor-primaria: #a9a9a9;
    --cor-secundaria: #00a86b;
    --cor-ternaria: #F6F6F6;
    --cor-hover: #272727;
    --cor-button: #007BFF;
    --cor-button-hover: #0056b3;
    --font-primaria: "Montserrat", sans-serif;
    --font-secundaria: "Krona One", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: var(--cor-ternaria);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
