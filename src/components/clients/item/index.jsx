import React from "react";

import * as Styles from "./styles";

const ClientItem = ({ data }) => {
  return (
    <Styles.Container>
      <Styles.ImageHolder src={data.img} />
    </Styles.Container>
  );
};

export default ClientItem;
