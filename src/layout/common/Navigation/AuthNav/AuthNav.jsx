import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { breakpoints } from 'styleConfig/breakpoints';


export const AuthNav = () => {
  return (
    <Menu>
      <Item>
        <StyledLink  to="/login">LogIn</StyledLink>
      </Item>
      <Item>
        <StyledLink  to="/signup">SignUp</StyledLink>
      </Item>
    </Menu>
  );
};

const Menu = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
`;
const Item = styled.li`
  &:not(:last-child){
    padding-right: ${p => p.theme.space[1]}px;
  };
`;
const StyledLink = styled(NavLink)`
transition: all .3s ease;
text-decoration: none;
display: block;
padding: ${p => p.theme.space[2]}px 0;
color: ${p => p.theme.colors.primary};
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
font-family: ${p => p.theme.fonts.body};
@media (${breakpoints.tablet}) {
  padding: ${p => p.theme.space[3]}px 0;
  };
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.l};
  };
  &.active {
    color: ${p => p.theme.colors.accentLight}
  };
  &:hover {
    color: ${p => p.theme.colors.accentLight};
    cursor: pointer;
  };
`;
