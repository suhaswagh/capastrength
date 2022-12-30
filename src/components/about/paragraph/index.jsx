import React from "react";

import SeactionHeading from "../../global/seaction-title";

import * as Styles from "./styles";

const ParaGraph = ({ title, text }) => {
  return (
    <Styles.Container className="px-md-5">
      {title ? <SeactionHeading title={title} /> : null}
      <Styles.TextHolder>{text}</Styles.TextHolder>
    </Styles.Container>
  );
};

export default ParaGraph;
