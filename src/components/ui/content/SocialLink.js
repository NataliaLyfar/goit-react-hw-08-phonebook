import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";


export const SocialLink = styled.a`
transition: all .3s ease;
display: inline-block;
color: inherit;
padding: ${p => p.theme.space[2]}px 0;
  &:not(:last-child) {
    padding-right: ${p => p.theme.space[1]}px;
  };
  svg{
    width: 25px;
    height: 25px;
    &:hover{
    color: ${p => p.theme.colors.accentLight};
  }
  };
  @media (${breakpoints.tablet}) {
    svg{
    width: 30px;
    height: 30px;
  };
  };
 
`;