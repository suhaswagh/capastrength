import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 85px;
  right: ${({ active }) => (active ? 0 : "-50px")};
  cursor: pointer;
  display: inline-block;
  opacity: ${({ active }) => (active ? 1 : 0)};
  /* visibility: ${({ active }) => (active ? "visible" : "hidden")}; */
  z-index: 9999;

  transition: all 0.3s ease-in-out;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.main.blue};
  padding: 20px 25px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  box-shadow: 0 0 7px rgba(4, 153, 219, 0.4);

`;

export const Trangletop = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${({ theme: { colors } }) => colors.main.yellow}; ;
`;

export const Tranglebottom = styled.div`
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid $white;
`;
