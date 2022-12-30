import React from "react";

import Seaction from "../../components/global/seaction";

import Projects from "../../components/projects";
import Services from "../../components/services";
import ClientsArea from "../../components/home/client";

const HomePage = () => {
  return (
    <div className="container">
      <Seaction>
        <Projects />
      </Seaction>
      <Seaction>
        <Services />
      </Seaction>
      <Seaction>
        <ClientsArea />
      </Seaction>
    </div>
  );
};

export default HomePage;
