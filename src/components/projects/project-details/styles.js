import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconHolder = styled.img`
  width: 25px;
  height: 25px;

  object-fit: contain;

  margin-right: 10px;

  /* transform: translateX(-150%); */
`;

export const TextHolder = styled.span`
  font-size: ${({ heading, big, small, theme: { font } }) =>
    heading ? font.title : small ? font.small : big ? font.big : font.main};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  display: block;
`;

export const TitleHolder = styled.div`
  margin: 20px 0 40px;
`;

export const ImageContainer = styled.div`
  /* margin: 50px 0 70px; */

  border-radius: 20px;
  /* height: 600px; */

  display: block;
  margin-bottom: 50px;

  /* .image-gallery-content .image-gallery-slide .image-gallery-image {
    max-height: 100%;
  } */
`;

export const ImageHolder = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 20px;

  object-fit: cover;
`;

export const DetailsWrapper = styled.div`
  margin: 20px 0 100px;
`;

export const DetailsItemHolder = styled.div`
  margin: 20px 0;
`;

export const ServiceListWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  flex-wrap: wrap;
  gap: 20px;

  margin: 10px 0;
`;
