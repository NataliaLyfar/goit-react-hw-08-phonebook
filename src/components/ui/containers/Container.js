import styled from 'styled-components';
import { breakpoints } from "styleConfig/breakpoints";


export const Container = styled.div`
position: relative;
margin: 0 auto;
font-family: ${p => p.theme.fonts.body};
color: ${p => p.theme.colors.black};
padding: 0 ${p => p.theme.space[2]}px;
  @media (${breakpoints.mobile}) {
    min-width: 370px;
  };
  @media (${breakpoints.tablet}) {
    padding: 0 ${p => p.theme.space[4]}px;
    min-width: 768px;
  };
  @media (${breakpoints.laptop}) {
    max-width: 1200px;
  };
`;
