import React from "react";

import { ServicesData } from "../servicesData";

import ServicesCard from "../card";

import ServiceItem from "../../projects/project-details/service-item";

import * as Styles from "./styles";

const ServicesList = () => {
  return (
    <Styles.Container>
      {ServicesData.map((item, key) => {
        return (
          <>
            <ServiceItem title={item?.name} />
            {/* <ServicesCard
                            key={key}
                            item={item}
                        /> */}
          </>
        );
      })}
    </Styles.Container>
  );
};

export default ServicesList;
