import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid: none;
  }
`;

export const AboutCard = styled.div`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  border-radius: 7px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);

  min-height: 250px;
  max-height: ${({ hovered }) => (hovered ? "1000px" : "465px")};

  margin: 0 10px;

  overflow: hidden;

  padding: 20px;

  font-size: ${({ theme: { font } }) => font.title};
  font-weight: 700;

  text-align: left;

  &:hover {
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme: { colors } }) => colors.main.blue};
    color: #ffffff;

    .paragraph-holder {
      &::before {
        top: 0;
        left: 0;
      }
    }
  }

  position: relative;

  transition: all 0.3s ease-in-out;
`;

export const ParagraphWrapper = styled.div`
  height: 100%;

  overflow-y: auto;

  &::before {
    content: "";
    background-color: ${({ theme: { colors } }) => colors.main.yellow};
    width: 50px;
    height: 50px;
    position: absolute;
    top: -50px;
    left: -50px;
    transition: all 0.3s ease-in-out;
    border-bottom-right-radius: 10px;
  }

  & > div {
    height: 100%;
    overflow-y: auto;
  }
`;
