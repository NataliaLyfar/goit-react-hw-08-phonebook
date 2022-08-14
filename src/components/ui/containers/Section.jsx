import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledSection = styled.section`
padding-top: ${p => p.theme.space[2]}px;
`;

export const Section = ({ children }) => {
  return (
    <StyledSection>
        {children}
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropTypes.any,
};
