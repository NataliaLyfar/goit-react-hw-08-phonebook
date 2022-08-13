import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";


export const PrimaryButton = styled.button`
transition: all .3s ease;
margin-top: ${p => p.theme.space[3]}px;
padding: ${p => p.theme.space[0]}px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-family:inherit;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.m};
  };
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.l};
  };
color: ${p => p.theme.colors.white};
background: transparent;
border-radius: ${p => p.theme.radii.normal};
outline: none;
border: none;
box-shadow: 0 2px 8px rgba(18, 92, 55 , 0.75), inset 0 1px rgba(255, 255, 255, 0.35),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(18, 92, 55 , 0.75);
  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accent};
    box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
  };
`;