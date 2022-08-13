import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
};
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; 
  color:black;
  background-color: white;
};
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
};
ul {
  list-style: none;
  margin: 0;
  padding: 0;
};
p, a, span, h1, h2, h3 {
  margin: 0;
  padding: 0;
};
a {
  text-decoration: none;
}
.react-tel-input .form-control {
transition: all .3s ease;
margin-bottom: 10px !important;
/* padding: 0 5px; */
background: #ececec !important;
border-radius: 5px;
border: none !important;
box-shadow: -10px -10px 15px rgba(255,255,255,0.3),
            10px 10px 15px rgba(70,70,70,0.12);
height: 35px;
width: 340px !important;
@media screen and (min-width: 768px) {
    width: 380px !important;
    font-size: 16px !important;
  };
@media screen and (min-width: 1200px) {
    width: 500px!important; 
    font-size: 18px !important;
  };
color: black;
font-family:inherit;
font-weight: 400;
font-size: 14px;
  &:hover, &:focus {
    outline: none;
    background-color: rgba(255,255,255,0.2);
    box-shadow: 
  -10px -10px 15px rgba(255, 255, 255, 0.5),
  10px 10px 15px rgba(70, 70, 70, 0.12),
  inset -10px -10px 15px rgba(255, 255, 255, 0.5),
  inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  }; 
};
.react-tel-input .selected-flag {
height: 35px !important;
width: 38px !important;
border-radius: 5px 0 0 5px !important;
};
.react-tel-input .flag-dropdown {
height: 35px !important;
width: 38px !important;
border-radius: 5px 0 0 5px !important;
border: none !important;
border-right: 1px solid #cacaca;
};
`



