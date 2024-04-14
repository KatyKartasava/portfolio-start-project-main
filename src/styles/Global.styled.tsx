import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: "Nunito", "Raleway", "Comfortaa" -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: ${theme.colors.primaryBg};

  color: ${theme.colors.fontText};
  letter-spacing: 0%;
  font-family: Nunito;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
  color: ${theme.colors.fontP};
  font-weight: bold;
}

p {
  
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

button {
  background-color: unset;
  border: none;
}


`