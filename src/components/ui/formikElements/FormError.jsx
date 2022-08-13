import PropTypes from 'prop-types';
import styled from "styled-components";
import { ErrorMessage } from "formik";
import { breakpoints } from 'styleConfig/breakpoints';

const ErrorText = styled.p`
  color: ${p => p.theme.colors.errorColor};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  margin-bottom: ${p => p.theme.space[1]}px;
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semibold};
  };
`;

export const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}/>
    );
  };

FormError.propTypes = {
  name: PropTypes.string.isRequired,
};