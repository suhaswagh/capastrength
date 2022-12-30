import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    gap: 20px;
`;

export const ImageHolder = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const TitleWrapper = styled.div`
    margin-bottom: 30px;
`;

export const TitleHolder = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

export const TextHolder = styled.p`
    font-size: ${({ theme: { font } }) => font.main};
`;

export const Button = styled.button`
    background-color: ${({ theme: { colors } }) => colors.main.yellow};
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
`;