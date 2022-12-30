import React from "react";

import { Link } from "react-router-dom";

import { AssetsList } from "../../elements/assetsList";

import * as Styles from "./styles";

const AppLogo = () => {
  return (
    <Styles.Container aria-label="App Logo" className="logo">
      <Link to="/">
        <Styles.ImageHolder src={AssetsList.logo.LogoSvg} />
      </Link>
    </Styles.Container>
  );
};

export default AppLogo;
