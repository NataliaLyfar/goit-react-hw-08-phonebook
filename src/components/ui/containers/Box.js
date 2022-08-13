import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";

export const Box = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 340px;
@media (${breakpoints.tablet}) {
    width: 380px;
  };
  @media (${breakpoints.laptop}) {
    width: 500px;
  };
`;