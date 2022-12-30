import React from "react";

import SeactionHeading from "../../global/seaction-title";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cardData } from "./data";

import AboutCard from "./card";

import * as Styles from "./styles";

const CardList = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Styles.ListContainer>
      <SeactionHeading title="Our Team" />
      <Styles.ListWrapper>
        <Carousel responsive={responsive}>
          {cardData.map((item, index) => {
            return <AboutCard key={index} data={item} />;
          })}
        </Carousel>
      </Styles.ListWrapper>
    </Styles.ListContainer>
  );
};

export default CardList;
