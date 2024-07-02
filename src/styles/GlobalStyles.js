import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";

const GlobalStyles = createGlobalStyle`
* {
   ${"" /* outline: 1px solid red !important; */}
}

   *,*::before,*::after {
      margin: 0;
      padding: 0;
   }
   html {
      overflow-x: hidden;
   }
   body {
      font-family:'Sora', sans-serif;
      overflow-x: hidden;
   }

   a {
      color: inherit;
      text-decoration: none;
   }
`;

export default GlobalStyles;
