import React from "react";

import * as Styles from "./styles";

const AboutCard = ({ data }) => {
  return (
    <Styles.CardContainer>
      <Styles.Wrapper>
        <Styles.CardTitle>{data.name}</Styles.CardTitle>
        <Styles.TextHolder>{data.words}</Styles.TextHolder>
      </Styles.Wrapper>
    </Styles.CardContainer>
  );
};

export default AboutCard;
