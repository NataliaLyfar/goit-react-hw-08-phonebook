import styled from "styled-components";


export const ProgressBar = (props) => {
    const {  completed } = props;
    return (
        <ContainerStyles>
            <LabelStyles
                role="progressbar"
                aria-valuenow={completed}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width: completed}}
            ></LabelStyles>
        </ContainerStyles>
    );
};

const ContainerStyles = styled.div`
transition: all .3s ease;
height: 3px;
width: 100vw;
background-color: ${p => p.theme.colors.accent};
border-radius: 50%;
`;

const LabelStyles = styled.span`
background-color: ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.accent};
`;