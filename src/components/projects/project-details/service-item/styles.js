import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.main.yellow};
  padding: 15px 20px;

  border-radius: 10px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* max-width: 150px; */
  min-width: 140px;

  &:hover {
    background-color: #fff;

    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
`;

export const ImageHolder = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;

  margin: 10px 0;
`;

export const TextWrapper = styled.p`
  margin-bottom: 0;
  text-align: center;

  font-weight: 600;

  white-space: nowrap;
  text-overflow: ellipsis;
`;
