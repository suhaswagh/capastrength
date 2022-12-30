import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: #fff;

    height: 100vh;
    width: 100vw;

    z-index: 9999;
`;


export const ImageContainer = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageHolder = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
`;