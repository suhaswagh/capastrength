import React from "react";

import * as Styles from "./styles";

const Seaction = ({ children, flex }) => {
  return (
    <Styles.Section className="py-5" flex={flex}>
      {children}
    </Styles.Section>
  );
};

export default Seaction;
