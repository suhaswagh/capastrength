import React from "react";

import InputField from "./input-field";
import InfoField from "./info";

import * as Styles from "./styles";

const Signup = () => {
  return (
    <Styles.Container>
      <div className="container">
        <Styles.Wrapper className="flex-wrap flex-md-nowrap">
          <Styles.BgOneWrapper />
          <Styles.BgTwoWrapper />
          <div className="col" style={{ zIndex: 999 }}>
            <InfoField />
          </div>
          <div className="col">
            <InputField />
          </div>
        </Styles.Wrapper>
      </div>
    </Styles.Container>
  );
};

export default Signup;
