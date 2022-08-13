import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";

export const Label = styled.label`
padding-bottom: ${p => p.theme.space[1]}px;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
margin-right: auto;
@media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.s};
  };
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.m};
  };
  svg{
    margin-right: ${p => p.theme.space[0]}px;
  };
`;