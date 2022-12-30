import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;

    padding: 10px 15px;
    border-radius: 10px;
    background-color: #fff;
`;

export const InputHolder = styled.input`
    box-sizing: border-box;
    width: 100%;

    border: none;

    &:focus{
        outline: none;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme: { colors } }) => colors.main.yellow};
    border: none;
    border-radius: 10px;

    padding: 7px 30px;
`;