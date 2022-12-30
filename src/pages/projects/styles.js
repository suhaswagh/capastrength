import styled from 'styled-components';

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    grid-gap: 40px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 600px) {
        grid: none;
    }
`;

export const VideoContainer = styled.div`
  
`;