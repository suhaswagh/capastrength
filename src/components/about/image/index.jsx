import React from "react";

import PageDimensions from "../../../styles/pageDimensions";

import * as Styles from "./styles";

const Image = ({ src }) => {
  const { width } = PageDimensions();

  const isMobile = width < 659;

  return (
    <Styles.Container fullWidth={isMobile}>
      <Styles.ImageHOlder src={src} alt="Image" />
    </Styles.Container>
  );
};

export default Image;
