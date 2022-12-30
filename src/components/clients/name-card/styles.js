import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: #fefefe;

  border-radius: 7px;

  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.15);

  min-height: 200px;
  max-height: 420px;

  margin: 0 10px;

  font-size: ${({ theme: { font } }) => font.title};
  font-weight: 700;

  &:hover {
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme: { colors } }) => `${colors.grey}01`};
    transition: all 0.3 ease-in-out;


    .title {
      background-color: ${({ theme: { colors } }) => colors.white};
    }
  }

  cursor: pointer;
  transition: all 0.3 ease-in-out;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  font-size: 25px;

  padding: 20px 60px;
`;

export const IconHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const TextHolder = styled.span``;

export const ListHolder = styled.ul`
  padding: 20px 60px;
  width: 100%;

  height: 100%;
  overflow-y: auto;
`;

export const ListItme = styled.li`
  padding: 10px;

  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.main.blue};
    color: #ffffff;
  }
`;
