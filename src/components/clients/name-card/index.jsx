import React from "react";

import { ArrowRightCircle } from "react-feather";

import * as Styles from "./styles";

const NameCard = ({ client }) => {
  console.log({ client });
  return (
    <Styles.Container>
      <Styles.TitleWrapper className="title">
        <Styles.IconHolder>{client?.icon}</Styles.IconHolder>
        <Styles.TextHolder>{client?.heading}</Styles.TextHolder>
      </Styles.TitleWrapper>
      <Styles.ListHolder>
        {client?.data?.map((item, index) => {
          return (
            <Styles.ListItme className="list-item" key={index}>
              <ArrowRightCircle />
              <Styles.TextHolder>{item?.title}</Styles.TextHolder>
            </Styles.ListItme>
          );
        })}
      </Styles.ListHolder>
    </Styles.Container>
  );
};

export default NameCard;
