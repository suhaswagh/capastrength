import React from "react";

import { AssetsList } from "../../../elements/assetsList";

import * as Styles from "./styles";

const InfoField = () => {
  return (
    <Styles.Container className="flex-wrap flex-lg-nowrap justify-content-center justify-content-md-start">
      <Styles.ImageHolder src={AssetsList.signFormIcon} />
      <Styles.TextWrapper>
        <Styles.TextHolder className="mb-3" heading>
          Get In Touch With Us
        </Styles.TextHolder>
        <Styles.TextHolder>
          Put your email address and get started
        </Styles.TextHolder>
      </Styles.TextWrapper>
    </Styles.Container>
  );
};

export default InfoField;
