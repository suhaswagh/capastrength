import React from "react";

import { Link } from "react-router-dom";

import { AssetsList } from "../../elements/assetsList";
import { ArrowRight, MapPin } from "react-feather";

import * as Styles from "./styles";

const ProjectCard = ({ item }) => {
  console.log({ item: item.banner[0] });
  return (
    <Styles.Container>
      <Link to={`/projects/${item.id}`}>
        <>
          <Styles.ImgContainer img={item?.thumbnail} className="image">
            <Styles.TagWrapper>
              <Styles.TextHolder sub bold upper>
                {item.tag}
              </Styles.TextHolder>
            </Styles.TagWrapper>
          </Styles.ImgContainer>
          <Styles.TextWrapper>
            {/* <Styles.SaveWrapper>
              <Styles.IconHolder src={AssetsList.save} />
            </Styles.SaveWrapper> */}
            <Styles.LocationWrapper>
              <Styles.IconHolder>
                <MapPin />
              </Styles.IconHolder>
              <Styles.TextHolder sub>{item.location}</Styles.TextHolder>
            </Styles.LocationWrapper>
            <Styles.Padding>
              <Styles.TextHolder className="title" heading>
                {item.title}
              </Styles.TextHolder>
            </Styles.Padding>
            <Styles.TextHolder sub>{item.info}</Styles.TextHolder>
          </Styles.TextWrapper>
          <Styles.LinkWrapper className="viewlink">
            <Styles.TextHolder bold>View</Styles.TextHolder>
            <Styles.ArrowHolder className="arrow">
              <ArrowRight />
            </Styles.ArrowHolder>
          </Styles.LinkWrapper>
        </>
      </Link>
    </Styles.Container>
  );
};

export default ProjectCard;
