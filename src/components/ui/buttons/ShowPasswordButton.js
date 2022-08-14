import styled from "styled-components";

export const ShowPasswordButton = styled.button`
transition: all .3s ease;
position: absolute;
top: 0;
right: 0;
width: 35px;
height: 35px;
border: transparent;
border-bottom-right-radius: ${p => p.theme.radii.normal};
border-top-right-radius: ${p => p.theme.radii.normal};
padding-right: ${p => p.theme.space[0]}px;
background-color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  };
`;