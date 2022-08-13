import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";

export const SecondaryButton = styled.button`
transition: all .3s ease;
position: absolute;
top: 15px;
left: 15px;
z-index: 11;
display: flex;
justify-content: center;
align-items: center;
padding: ${p => p.theme.space[0]}px;
  @media (${breakpoints.laptop}) {
    padding: ${p => p.theme.space[1]}px;
  };
border: none;
border-radius: ${p => p.theme.radii.round};
box-shadow: 0 2px 8px rgba(28, 120, 109, 0.75), inset 0 1px rgba(255, 255, 255, 0.35),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(28, 120, 109, 0.75);
outline: none;
  svg{
    width: 25px;
    height: 25px;
    background-color: transparent; 
    color: ${p => p.theme.colors.white}; 
    border-radius: ${p => p.theme.radii.round};
      @media (${breakpoints.tablet}) {
        width: 30px;
        height: 30px;
      };
    };
  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accent};
    box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
  };
`;