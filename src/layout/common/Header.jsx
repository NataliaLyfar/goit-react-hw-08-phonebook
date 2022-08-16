import { useSelector } from "react-redux";
import  authSelectors  from "redux/auth/authSelectors";
import styled from "styled-components";
import { Container } from "components/ui";
import { Navigation, AuthNav, UserMenu  } from "./Navigation";


export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderBox>
          <Navigation/>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderBox>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
margin: 0 auto;
box-shadow: inset 10px 10px 15px rgba(255, 255, 255, 0.5), 
           inset -10px -10px 15px rgba(70, 70, 70, 0.12);
width: 100%;
font-family: ${p => p.theme.fonts.body};
`;
const HeaderBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;