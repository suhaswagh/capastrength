import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.main.yellow};
  border: 1px solid ${({ theme: { colors } }) => colors.main.yellow};
  padding: 5px 15px;
  border-radius: 100px;
  color: ${({ theme: { colors } }) => colors.dark};
  font-weight: 600;
  transition: all 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.white};
    border: 1px solid ${({ theme: { colors } }) => colors.main.red};
    color: ${({ theme: { colors } }) => colors.main.red};
  }
`;
