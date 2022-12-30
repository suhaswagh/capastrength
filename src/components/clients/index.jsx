import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SeactionHeading from "../global/seaction-title";

import * as Styles from "./styles";

import ClientItem from "./item";
import NameCard from "./name-card";

import {
  clientdata,
  industrialCommercial,
  residentialData,
  collegeData,
  publicTrustData,
  hotelData,
  mallsData,
  allClientsData,
} from "./data";

const Clients = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const allResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
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

  // const hey = residentialData.map((item) => item?.split("•"));
  // const hey2 = hey[0].map((item) => {
  //   return { title: item.trim() };
  // });

  // console.log({ hey2 });

  return (
    <Styles.Container>
      <Styles.ListHolder>
        <SeactionHeading title="Clients" />
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          autoPlaySpeed={6000}
          slidesToSlide={1}
          transitionDuration={30000}
        >
          {clientdata.map((item, index) => {
            return <ClientItem key={index} data={item} />;
          })}
        </Carousel>
      </Styles.ListHolder>
      <Styles.AllListHolder>
        {allClientsData.map((item, index) => {
          return <NameCard key={index} client={item} />;
        })}
      </Styles.AllListHolder>
      {/* <Styles.ListHolder>
        <SeactionHeading title="Residential" />
        <Carousel responsive={responsive} autoPlay infinite>
          {residentialData.map((item, index) => {
            return <NameCard key={index} title={item?.title} />;
          })}
        </Carousel>
      </Styles.ListHolder>
      <Styles.ListHolder>
        <SeactionHeading title="School / College" />
        <Carousel responsive={responsive} autoPlay infinite>
          {collegeData.map((item, index) => {
            return <NameCard key={index} title={item?.title} />;
          })}
        </Carousel>
      </Styles.ListHolder>
      <Styles.ListHolder>
        <SeactionHeading title="Public Trust" />
        <Carousel responsive={responsive} autoPlay infinite>
          {publicTrustData.map((item, index) => {
            return <NameCard key={index} title={item?.title} />;
          })}
        </Carousel>
      </Styles.ListHolder>
      <Styles.ListHolder>
        <SeactionHeading title="Hotels" />
        <Carousel responsive={responsive} autoPlay infinite>
          {hotelData.map((item, index) => {
            return <NameCard key={index} title={item?.title} />;
          })}
        </Carousel>
      </Styles.ListHolder>
      <Styles.ListHolder>
        <SeactionHeading title="Malls" />
        <Carousel responsive={responsive} autoPlay infinite>
          {mallsData.map((item, index) => {
            return <NameCard key={index} title={item?.title} />;
          })}
        </Carousel>
      </Styles.ListHolder> */}
    </Styles.Container>
  );
};

export default Clients;
