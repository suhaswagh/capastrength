import React from "react";

import { Link } from "react-router-dom";
import { AssetsList } from "../../elements/assetsList";

import Button from "../../elements/button";

import * as Styles from "./styles";

const ClientsArea = () => {
  return (
    <Styles.Container className="flex-wrap flex-md-nowrap">
      <div className="col col-12 col-md-7">
        <Styles.ImageHolder src={AssetsList.client} />
      </div>
      <div className="col col-12 col-md-5 ps-md-4">
        <Styles.TitleWrapper>
          <Styles.TitleHolder>Our Client</Styles.TitleHolder>
        </Styles.TitleWrapper>
        <Styles.TextHolder className="pe-md-5">
          Capastrength is one of the India’s leading service providers of
          Retrofitting, Structural Strengthening services for structures of many
          regions key public and private organisations. We have worked closely
          and successfully with Organisations and major companies, and pride
          ourselves on meeting and exceeding our clients high expectations.
          Here, you can find a selection of the many client organisations we
          already work closely alongside.
        </Styles.TextHolder>
        <Link to="/clients">
          <Button className="my-3">See Clients</Button>
        </Link>
      </div>
    </Styles.Container>
  );
};

export default ClientsArea;
