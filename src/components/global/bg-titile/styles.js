import styled from "styled-components";

export const Container = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: ${({ small }) => (small ? "200px" : "300px")};
  padding: ${({ small }) => (small ? "200px 0" : "300px 0")};

  position: relative;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000095;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;


export const Wrapper = styled.div`
  width: 90%;
  margin: auto;

  text-align: center;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 999;
`;

export const Holder = styled.div``;

export const Title = styled.div`
  font-size: 30px;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: bold;
`;

export const SubTitle = styled.div`
  font-size: ${({ theme: { font } }) => font.main};
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.main.yellow};
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
`;
