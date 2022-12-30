import React from "react";

import { useParams, Link } from "react-router-dom";

import ImageGallery from "react-image-gallery";

import { AssetsList } from "../../elements/assetsList";

import { ProjectData } from "../projectData";

import ServiceItem from "./service-item";

import * as Styles from "./styles";

const ProjectDetails = () => {
  const { id } = useParams();

  const data = ProjectData.filter(
    (item) => parseInt(item.id) === parseInt(id)
  )[0];

  return (
    <Styles.Container>
      <Link to="/projects">
        <Styles.BackButtonWrapper>
          <Styles.IconHolder src={AssetsList.chevron.left} />
          <Styles.TextHolder bold heading>
            {data.title}
          </Styles.TextHolder>
        </Styles.BackButtonWrapper>
      </Link>
      <Styles.TitleHolder>
        <Styles.TextHolder className="mb-2" bold big>
         {data.tag}
        </Styles.TextHolder>
        <Styles.TextHolder small>{data.location}</Styles.TextHolder>
      </Styles.TitleHolder>
      <Styles.ImageContainer>
        <ImageGallery
          items={data.banner}
          originalHeight={"100%"}
          originalWidth={"100%"}
          showThumbnails={false}
          showPlayButton={false}
        />
        {/* <Styles.ImageHolder src={data.banner} /> */}
      </Styles.ImageContainer>
      <Styles.DetailsWrapper>
        <Styles.DetailsItemHolder>
          <Styles.TextHolder bold heading>
            Location :
          </Styles.TextHolder>
          <Styles.TextHolder heading>{data.location}</Styles.TextHolder>
        </Styles.DetailsItemHolder>
        <Styles.DetailsItemHolder>
          <Styles.TextHolder bold heading>
            Description :
          </Styles.TextHolder>
          <Styles.TextHolder heading>{data.description}</Styles.TextHolder>
        </Styles.DetailsItemHolder>
        <Styles.DetailsItemHolder>
          <Styles.TextHolder bold heading>
            Services :
          </Styles.TextHolder>
          <Styles.ServiceListWrapper>
            {data.services.map((item, key) => {
              return <ServiceItem key={key} title={item} />;
            })}
          </Styles.ServiceListWrapper>
        </Styles.DetailsItemHolder>
      </Styles.DetailsWrapper>
    </Styles.Container>
  );
};

export default ProjectDetails;
