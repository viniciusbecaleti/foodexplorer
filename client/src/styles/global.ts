import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --swiper-navigation-size: 28px;
    --swiper-navigation-sides-offset: 30px;
    --swiper-navigation-color: white;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["cake-100"]};
  }

  html {
    font-size: 6.25%;
  }

  body, input, select, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16rem;
  }

  body {
    color: ${({ theme }) => theme["light-300"]};
    background: ${({ theme }) => theme["dark-400"]};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
    font-size: 32rem;
    font-weight: 500;
    line-height: 1.4;
    color: ${({ theme }) => theme["light-100"]};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
