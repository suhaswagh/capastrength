import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 15px 0;

  box-shadow: 0 0 10px #00000010;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  z-index: 9999;
`;

export const Container = styled.div``;

export const Wtapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuListWrapper = styled.ul`
  list-style-type: none;
  margin-bottom: 0;
`;

export const MenuItem = styled.li`
  display: inline-block;
  padding: 0 15px;
  font-size: ${({ theme: { font } }) => font.main};
  font-weight: 600;
  color: ${({ active, theme: { colors } }) =>
    active ? colors.main.red : colors.black};

  transition: all .3s ease-in-out;
`;

export const MobileMenuContainer = styled.div``;
