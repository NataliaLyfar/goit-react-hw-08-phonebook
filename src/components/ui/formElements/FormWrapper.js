import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";
import BackPic from 'assets/formBack.jpg'

export const FormWrapper = styled.div`
position: relative;
margin: ${p => p.theme.space[3]}px auto;
padding: ${p => p.theme.space[3]}px 0 ${p => p.theme.space[7]}px;
border-radius: ${p => p.theme.radii.normal};
background-color: ${p => p.theme.colors.secondary};
display: flex;
flex-direction: column;
align-items: center;
width: 370px;
  @media (${breakpoints.tablet}) {
    width: 410px;
  };
  @media (${breakpoints.laptop}) {
    width: 530px;
  };
`;
export const UpdateFormWrapper = styled.div`
position: relative;
margin: ${p => p.theme.space[3]}px auto;
padding: ${p => p.theme.space[8]}px ${p => p.theme.space[3]}px;
border-radius: ${p => p.theme.radii.normal};
background-color: ${p => p.theme.colors.secondary};
display: flex;
flex-direction: column;
align-items: center;
`;
export const FormPageContainer = styled.div`
height: 100%;
width: 100%;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
background-color: white;
background-image: url(${BackPic});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`;