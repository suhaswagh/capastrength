import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ImageHolder = styled.img`
    width: 160px;
    height: 160px;
    object-fit: contain;
`;

export const TextWrapper = styled.div`
    margin-left: 20px;
`;

export const TextHolder = styled.p`
    font-size: ${({ heading, theme: { font } }) => heading ? font.big : font.title};
    font-weight: bold;
    color: #fff;
`;