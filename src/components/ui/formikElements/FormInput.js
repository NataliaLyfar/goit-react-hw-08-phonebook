import styled from "styled-components";
import { Field } from 'formik';
import { breakpoints } from "styleConfig/breakpoints";
import 'react-phone-input-2/lib/style.css';


export const FormInput = styled(Field)`
transition: all .3s ease;
margin-bottom: ${p => p.theme.space[1]}px;
padding: 0 ${p => p.theme.space[0]}px;
background-color: ${p => p.theme.colors.shadow};
border-radius: ${p => p.theme.radii.normal};
border: none;
box-shadow: -10px -10px 15px rgba(255,255,255,0.3),
            10px 10px 15px rgba(70,70,70,0.12);
height: 35px;
min-width: 340px;
@media (${breakpoints.tablet}) {
    width: 380px;
    font-size: ${p => p.theme.fontSizes.m};
  };
  @media (${breakpoints.laptop}) {
    width: 500px;
    font-size: ${p => p.theme.fontSizes.l};
  };
color: ${p => p.theme.colors.black};
font-family:inherit;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
  &:hover {
    outline: none;
    background-color: ${p => p.theme.colors.shade};
    box-shadow: 
  -10px -10px 15px rgba(255, 255, 255, 0.5),
  10px 10px 15px rgba(70, 70, 70, 0.12),
  inset -10px -10px 15px rgba(255, 255, 255, 0.5),
  inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  };
  &:focus {
    outline: none;
    background-color: ${p => p.theme.colors.shadow};
    box-shadow: 
  -10px -10px 15px rgba(255, 255, 255, 0.5),
  10px 10px 15px rgba(70, 70, 70, 0.12),
  inset -10px -10px 15px rgba(255, 255, 255, 0.5),
  inset 10px 10px 15px rgba(70, 70, 70, 0.12);
  };
`;

export const InputWrapper = styled.div`
position: relative;
`;