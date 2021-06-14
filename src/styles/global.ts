import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  :root {
    --background: #F0F2F5;
    --white: #fff;
    --black: #000;
    --green: #7ce0d3;
    --blue: #07b1c8;
    --red: #ed125f;
  }

  body {
    background: var(----background);
    -webkit-font-smooting: antialiased;
  }

  body, input, textarea, button {
    font-family: "Poppins", Helvetica, sans-serif;
    color: var(--black);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.8);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .react-modal-content {
    max-width: 600px;
    width: 100%;
    background: var(--background);
    padding: 2rem;
    position: relative;
    border-radius: 0.5rem;
  }

  .react-modal-close {
    position: absolute;
    right: 2rem;
    top: 2rem;
    border: 0;
    background: transparent;

    transition: filter 0.1s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
