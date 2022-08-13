import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";


export const List = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
width: 340px;
margin: ${p => p.theme.space[2]}px 0;
color: ${p => p.theme.colors.black}; 
font-size: ${p => p.theme.fontSizes.s};
@media (${breakpoints.tablet}) {
    width: 380px;
    font-size: ${p => p.theme.fontSizes.m};
  };
  @media (${breakpoints.laptop}) {
    width: 500px;
    margin-top: ${p => p.theme.space[5]}px;
    font-size: ${p => p.theme.fontSizes.l};
  };
`;