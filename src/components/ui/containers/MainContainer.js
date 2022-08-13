import styled from 'styled-components';
import { breakpoints } from "styleConfig/breakpoints";


export const MainContainer = styled.div`
  margin: 0 auto;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.black};
  overflow: auto;
  height: calc(100vh - 113px);
  @media (${breakpoints.mobile}) {
    min-width: 370px;
  };
  @media (${breakpoints.tablet}) {
    min-width: 768px;
    height: calc(100vh - 133px);
  };
  @media (${breakpoints.laptop}) {
    max-width: 1200px;
  };
`;
