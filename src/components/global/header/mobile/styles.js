import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 15px 0;

  box-shadow: 0 0 10px #00000010;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 100vh;
  width: 100vw;

  z-index: 9999;

  transform: ${({ active }) =>
    active ? "translateX(0)" : "translateX(-100%)"};

  transition: all 0.3s ease-in-out;
`;

export const Container = styled.div`
  position: relative;
  padding-top: 120px;
`;

export const Wtapper = styled.div`
  text-align: center;

  .logo {
    margin: auto;

    transform: scale(2);
  }
`;

export const MenuContainer = styled.div`
  text-align: center;

  margin: 90px 0;
`;

export const MenuListWrapper = styled.ul`
  list-style-type: none;
  margin-bottom: 0;
  padding-left: 0;
`;

export const MenuItem = styled.li`
  display: block;
  padding: 10px 15px;
  font-size: ${({ theme: { font } }) => font.big};
  font-weight: ${({ active }) => (active ? "bold" : 400)};
  color: ${({ active, theme: { colors } }) =>
    active ? colors.main.red : colors.black};

  &.button {
    background-color: ${({ theme: { colors } }) => colors.main.yellow};
    padding: 5px 10px;
    border-radius: 5px;
    color: ${({ theme: { colors } }) => colors.black};
  }
`;

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  svg {
    width: 40px;
    height: 40px;
  }
`;
