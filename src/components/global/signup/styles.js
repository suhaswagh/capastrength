import styled from "styled-components";
import bgOne from "../../../assets/bg/signup-form-bg-1.png";
import bgTwo from "../../../assets/bg/signup-form-bg-2.png";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  background-color: #3e485a;
  border-radius: 20px;

  padding: 35px 30px;

  gap: 20px;

  position: relative;
  overflow: hidden;
`;

export const BgOneWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(${bgOne});
  background-size: contain;
  background-repeat: no-repeat;
  width: 180px;
  height: 300px;
  z-index: 1;
  opacity: 0.5;
`;

export const BgTwoWrapper = styled.div`
  position: absolute;
  top: 70%;
  left: 40%;
  background-image: url(${bgTwo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 400px;
  opacity: 0.5;
`;
