import { useEffect, useState } from "react";
import styled from "styled-components";


let progressInterval = null;
export const ProgressBar = (props) => {
    const [completed, setCompleted] = useState(0);
    useEffect(() => {
      progressInterval = setInterval(() => {
        setCompleted(prev => prev + 10)}, 10);
    }, []);
  
    useEffect(() => {
      if(completed >= 100){
        clearInterval(progressInterval);
        };  
    }, [completed]);


    return (
        <ContainerStyles>
            <LabelStyles
                role="progressbar"
                aria-valuenow={completed}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width: completed}}
                max={100}
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