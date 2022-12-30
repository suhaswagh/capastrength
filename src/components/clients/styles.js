import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;

  .react-multiple-carousel__arrow.react-multiple-carousel__arrow--left {
    transform: translateX(-90%);
  }
  .react-multiple-carousel__arrow.react-multiple-carousel__arrow--right {
    transform: translateX(90%);
  }
`;

export const ListHolder = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid: none;
  } */

  margin: 50px 0;
`;

export const AllListHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid: none;
  }

  margin: 50px 0;
`;
