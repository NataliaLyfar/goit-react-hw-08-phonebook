import PropTypes from 'prop-types';
import styled from "styled-components";
import { ErrorMessage } from "formik";
import { breakpoints } from 'styleConfig/breakpoints';



export const FormError = ({ name }) => {
  return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}/>
    );
  };

FormError.propTypes = {
  name: PropTypes.string.isRequired,
};

const ErrorText = styled.p`
  color: ${p => p.theme.colors.errorColor};
  background-color: ${p => p.theme.colors.shadow};
  padding: 0 ${p => p.theme.space[0]}px;
  border-radius: ${p => p.theme.radii.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  margin-bottom: ${p => p.theme.space[1]}px;
  padding: 0 ${p => p.theme.space[0]}px;
  min-width: 340px;
  @media (${breakpoints.tablet}) {
    width: 380px;
  };
  @media (${breakpoints.laptop}) {
    width: 500px;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semibold};
  };
`;