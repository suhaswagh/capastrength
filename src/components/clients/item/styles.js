import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fefefe;

  padding: 20px;
  border-radius: 7px;

  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.15);

  max-height: 160px;
  min-height: 160px;

  margin: 0 10px;

  &:hover {
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
  }

  cursor: pointer;
  transition: all 0.2 ease-in-out;
`;

export const ImageHolder = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;
