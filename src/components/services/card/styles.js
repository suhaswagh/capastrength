import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  text-align: center;

  cursor: pointer;

  &:hover {
    .text {
      color: ${({ theme: { colors } }) => colors.main.red};
      font-weight: 600;
    }

    .image {
      background-color: ${({ theme: { colors } }) => colors.main.blue};
      box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const ImageWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.05);
  border-radius: 100px;

  width: 130px;
  height: 130px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease-in-out;
`;

export const IconHolder = styled.img`
  width: 60px;
  height: 60px;
`;

export const TextHolder = styled.p`
  margin: 20px 0;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
`;
