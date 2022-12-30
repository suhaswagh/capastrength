import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 40px 30px;
  background-color: #fff;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);

  text-align: center;

  border-radius: 20px;

  margin: 0 10px;

  flex: 1;
  height: 100%;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.main.blue};
    color: #fff;
  }

  transition: all 0.2s ease-in-out;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h4`
  font-weight: 600;
`;

export const TextHolder = styled.p`
  flex: 1;
`;

export const ListContainer = styled.div``;

export const ListWrapper = styled.div`
  .react-multi-carousel-track {
    /* gap: 20px; */
  }
`;
