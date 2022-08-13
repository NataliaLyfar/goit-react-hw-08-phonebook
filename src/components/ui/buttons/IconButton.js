import styled from "styled-components";

export const IconButton = styled.button`
transition: all .3s ease;
margin-left: auto;
padding: ${p => p.theme.space[0]}px;
display: flex;
justify-content: center;
align-items: center;
color: ${p => p.theme.colors.white};
background: transparent;
border: none;
border-radius: ${p => p.theme.radii.normal};
box-shadow: 0 2px 8px rgba(28, 120, 109, 0.75), inset 0 1px rgba(255, 255, 255, 0.35),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(28, 120, 109, 0.75);
  svg{
    color: ${p => p.theme.colors.white};
  }
  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.accent};;
    box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
  };
`;