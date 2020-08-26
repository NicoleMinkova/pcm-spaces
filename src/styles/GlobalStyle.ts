import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: rgb(250, 250, 250);;
    color: #373841;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4 {
    /* font-family: 'Georgia', sans-serif; */
    font-weight: 700;
  }

  p {
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* https://stackoverflow.com/a/13354689/5207233 */
  ol {
  list-style: none;
  counter-reset: my-awesome-counter;
  }

  ol li {
    padding-left: 1.3em;
    counter-increment: my-awesome-counter;
  }

  ol li::before {
    content: counter(my-awesome-counter) ". ";
    position: absolute;
    margin-left: -1.3em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

export default GlobalStyle;
