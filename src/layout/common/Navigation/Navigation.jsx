import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors  from "redux/auth/authSelectors";
import styled from "styled-components"
import { breakpoints } from "styleConfig/breakpoints";


export const Navigation = () => {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Nav>
      <Link to='/'>Home</Link>
        {isLoggedIn && 
      <Link to='/contacts'>Contacts</Link>}
    </Nav>
  );
};

const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: flex-start;
`;
const Link = styled(NavLink)`
transition: all .3s ease;
padding: ${p => p.theme.space[2]}px 0;
color: ${p => p.theme.colors.primary};
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
  &:not(:last-child){
    margin-right: ${p => p.theme.space[2]}px;
  };
  @media (${breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};
    padding: ${p => p.theme.space[3]}px 0;
    &:not(:last-child){
      margin-right: ${p => p.theme.space[2]}px;
    };
  };
  &.active {
    color: ${p => p.theme.colors.accentLight}
  };
  &:hover {
    color: ${p => p.theme.colors.accentLight};
    cursor: pointer;
  };
`;