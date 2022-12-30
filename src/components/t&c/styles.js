import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const TitleHolder = styled.p`
  
`;

export const ListHolder = styled.ul`
    list-style-type: disc;
`;

export const ListItem = styled.li`
    padding: 20px 0;
`;

export const Button = styled.button`
    background-color: ${({ theme: { colors } }) => colors.main.yellow};
    padding: 10px 20px;
    border-radius: 5px;
    border: none;

    margin: 50px 0 20px;
`;