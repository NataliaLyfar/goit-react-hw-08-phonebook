import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const Title = styled.h2`
  padding: ${p => p.theme.space[2]}px 0 ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semibold};
  color: ${p => p.theme.colors.primary};
  text-align: center;
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.bold};
    padding: ${p => p.theme.space[3]}px 0;
  };
  @media (${breakpoints.laptop}) {
    padding: ${p => p.theme.space[6]}px 0 ${p => p.theme.space[2]}px;
  };
`;
