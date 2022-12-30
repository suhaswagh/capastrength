import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;

  overflow: hidden;

  flex: 1 1 auto;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.3);
    .arrow {
      margin-left: 12px;
    }

    .title {
      color: ${({ theme: { colors } }) => colors.main.blue};
    }

    .viewlink {
      color: ${({ theme: { colors } }) => colors.main.red};
    }

    .image {
      background-size: 110%;
      transition: all 0.4s ease-in-out;
    }
  }

  transition: all 0.3s ease-in-out;

  position: relative;
`;

export const ImgContainer = styled.div`
  position: relative;
  background-image: ${({ img }) => `url(${img})`};
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  transition: all 0.4s ease-in-out;

  height: 180px;
`;

export const TagWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  background-color: ${({ theme: { colors } }) => colors.main.blue};

  color: #fff;
  padding: 5px 25px;
  border-bottom-left-radius: 10px;
`;

export const TextHolder = styled.span`
  font-size: ${({ sub, heading, theme: { font } }) =>
    sub ? font.sub : heading ? font.title : font.main};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  text-transform: ${({ upper }) => (upper ? "uppercase" : "none")};

  position: relative;

  transition: all 0.3s ease-in-out;
`;

export const TextWrapper = styled.div`
  padding: 20px;
  margin-bottom: 30px;
`;

export const SaveWrapper = styled.div`
  background-color: #e5e5e6;
  padding: 15px 16px;

  position: absolute;
  right: 10%;
  top: 0;

  transform: translateY(-50%);

  border-radius: 10px;
`;

export const IconHolder = styled.div`
  margin-right: 8px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Padding = styled.div`
  padding: 15px 0 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.main.blue};

  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const ArrowHolder = styled.div`
  margin-left: 6px;

  svg {
    width: 20px;
    height: 20px;
  }
  transition: all 0.3s ease-in-out;
`;
