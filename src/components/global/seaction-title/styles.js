import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    padding: 20px 0 30px;

    font-size: ${({ theme: { font } }) => font.big};
    font-weight: bold;
`;