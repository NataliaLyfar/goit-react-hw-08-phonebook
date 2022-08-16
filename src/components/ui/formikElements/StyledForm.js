import styled from "styled-components";
import { Form } from 'formik';
import { breakpoints } from "styleConfig/breakpoints";
import 'react-phone-input-2/lib/style.css';

export const StyledForm = styled(Form)`
display: flex;
flex-flow: column;
justify-content: center;
align-items: start;
min-width: 340px;
color: ${p => p.theme.colors.primary};
  @media (${breakpoints.tablet}) {
    width: 380px;
  };
  @media (${breakpoints.laptop}) {
    width: 500px;
  };
`;

