import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;

  background-color: ${({ theme: { colors } }) => colors.main.blue};
  color: #fff;

  position: relative;
`;

export const MainFooter = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 15px 0;
`;

export const RowHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const ImageWrapper = styled.div`
  /* margin-bottom: 20px; */
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 0;
`;

export const MenuListHolder = styled.ul`
  margin-bottom: 0;
  padding-left: 0;

  column-count: 3;

  flex: 2;
`;

export const MenuListItem = styled.div`
  padding: 10px;
  cursor: pointer;
`;

export const SocialWrapper = styled.div`
  /* flex: 1; */
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme: { colors } }) => colors.main.blue};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.main.blue};
    color: ${({ theme: { colors } }) => colors.main.yellow};
    padding: 6px 12px;
    border-radius: 100px;
  }

  transition: all 0.3s ease-in-out;

  /* margin-bottom: 20px; */

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const TextHolder = styled.span``;

export const IconHolder = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-right: 10px;
`;

export const SocialHolder = styled.div`
  a {
    margin: 5px 20px 5px 0;

    &:last-of-type {
      margin-right: 0;
    }

    background-color: ${({ theme: { colors } }) => colors.main.red};

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.main.blue};
      color: ${({ theme: { colors } }) => colors.main.yellow};
    }

    padding: 10px;
    border-radius: 100px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      stroke-width: 2px;
    }
  }
`;

export const CopyrightWrapper = styled.div`
  padding: 20px 0;
  /* margin-top: 70px; */

  border-top: 1px solid ${({ theme: { colors } }) => colors.white};

  font-size: ${({ theme: { font } }) => font.main};

  a {
    margin-left: 7px;
    text-decoration: underline;
    font-weight: 600;

    &:hover {
      color: ${({ theme: { colors } }) => colors.main.yellow};
    }
  }
`;
