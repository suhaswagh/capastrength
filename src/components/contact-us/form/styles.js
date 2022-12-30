import styled from "styled-components";

export const Contaier = styled.div``;

export const FormHolder = styled.form``;

export const RowHolder = styled.div`
  margin: 20px 0;
`;

export const LabelHolder = styled.label`
  display: block;
  margin-left: 10px;
  margin-bottom: 10px;

  color: ${({ theme: { colors } }) => colors.grey};
`;

export const InputHolder = styled.input`
  border: 2px solid
    ${({ error, theme: { colors } }) => (error ? colors.main.red : colors.grey)};
  padding: 10px 16px;
  border-radius: 100px;

  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme: { colors } }) => colors.main.blue};
  }
`;

export const Button = styled.button`
  background-color: ${({ success, theme: { colors } }) =>
    success ? "#a2ff54" : colors.main.yellow};
  border: none;
  padding: 10px;
  width: 100%;
  font-weight: 600;

  border-radius: 100px;

  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);

  margin-top: 20px;

  color: ${({ theme: { colors } }) => colors.main.blue};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.main.blue};
    color: ${({ theme: { colors } }) => colors.white};
  }

  transition: all 0.3s ease-in-out;
`;

export const ShowError = styled.p`
  color: red;
`;

export const ShowSuccess = styled.p`
  color: green;
  margin-top: 10px;
  text-align: center;
`;
