import React from "react";

import { AssetsList } from "../../../elements/assetsList";

import * as Styles from "./styles";

const ServiceItem = ({ title }) => {
  return (
    <Styles.Container>
      {/* <Styles.ImageHolder src={AssetsList.logo} /> */}
      <Styles.TextWrapper title={title}>{title}</Styles.TextWrapper>
    </Styles.Container>
  );
};

export default ServiceItem;
