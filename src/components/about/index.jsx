import React, { useState } from "react";

import Seaction from "../../components/global/seaction";
import CardList from "../../components/about/card/list";

import SeactionHeading from "../../components/global/seaction-title";

import ParaGraph from "../../components/about/paragraph";
import { solutionProcidersData, servicesData } from "./data";

import * as Styles from "./styles";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <Styles.Container>
      <Seaction>
        <CardList />
      </Seaction>
      <Styles.Wrapper>
        <Styles.AboutCard>
          <SeactionHeading title="Vision" />
          <Styles.ParagraphWrapper className="paragraph-holder">
            <ParaGraph
              text="To be a leader in providing quality civil engineering solutions by integrating state of the art 
                    techniques by using eficient human resources by specialized training and quality material. To be a leader in providing quality civil engineering solutions by integrating state of the art 
                    techniques by using eficient human resources by specialized training and quality material."
            />
          </Styles.ParagraphWrapper>
        </Styles.AboutCard>
        <Styles.AboutCard
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          hovered={isHovered}
        >
          <SeactionHeading title="About Us" />
          <Styles.ParagraphWrapper className="paragraph-holder">
            <ParaGraph
              text="CapaStrength is one of India's leading providers of Retrotting/Structural Strengthening 
                    services for structures. The company delivers engineering solutions with a focus on 
                    technical quality and eficiency while ensuring on-time completion of projects.
                    We undertake a variety of projects for a wide range of cliental from small residential 
                    societies to large commercial projects. It includes projects that come under diverse 
                    Categories such as high-rise Residential Buildings, Commercial Buildings, Cement 
                    Chemical Plants, Bridges, Power Plants, Jetties, Five Star Hotels, Temples, Heritage 
                    structures etc. We have been focused on Rehabilitation of damaged structures i.e. 
                    retroctting and structural strengthening works. Our unique and yexible project 
                    management systems ensure that a positive outcome is achieved regardless of size or 
                    nature of the project. 
                    Our philosophy of 'No Compromise' has come a long way implanting our strong 
                    commitment to highest standards of excellence and ethics. It motivates innovation 
                    and people development, which in turn lead to superior quality and services. It has 
                    also resulted in rehabilitating projects at par with top standards and maximum customer satisfaction.Our strong growth has been as a result of consistently delivering quality works both on 
                    time, on budget and high level of safety. Over the years, we have developed and implemented anintegrated management 
                    system that ensures our work, health and safety, quality and environmental 
                    obligations which are not only met but also continue to be monitored and improved 
                    upon."
            />
          </Styles.ParagraphWrapper>
        </Styles.AboutCard>
        <Styles.AboutCard>
          <SeactionHeading title="Founder Message" />
          <Styles.ParagraphWrapper className="paragraph-holder">
            <ParaGraph
              text="After providing service more than 10 years as “RESCON” now we reformed as a   “CAPASTRENGTH”. To undertake Retrofitting, Structural Strengthening of civil structures. Since then, numerous projects have been successfully undertaken and completed.
                We shall contribute towards creating sustainable solutions to Better, Safer and Healthier life for people. . .
                We constantly focus on the development of all our employees through training to make them capable enough to deliver their best while converti"
            />
          </Styles.ParagraphWrapper>
        </Styles.AboutCard>
        <Styles.AboutCard>
          <SeactionHeading title="Managemnet" />
          <Styles.ParagraphWrapper className="paragraph-holder">
            <ParaGraph
              text="We have in-depth knowledge of Structural Design, FRP Design, Civil construction, which includes Retrofitting, Structural Strengthening, Environmental coatings and rehabilitation of old/damaged structures waterproofing. This has allowed to lead Capastrength from the front.
                Capastrength has undertaken several successful projects for eminent entities such as Johnson and Johnson, Bayer, provinces Land Hotels, MRF, Embassy Siyaram, 24x7 Services. Capastrength continues to grow and flourish under gui"
            />
          </Styles.ParagraphWrapper>
        </Styles.AboutCard>
        <Styles.AboutCard>
          <SeactionHeading title="Service Provider" />
          <Styles.ParagraphWrapper className="paragraph-holder">
            <div style={{ padding: "0 30px" }}>
              <ul>
                {solutionProcidersData?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </Styles.ParagraphWrapper>
        </Styles.AboutCard>
        <Styles.AboutCard>
          <SeactionHeading title="Our Service" />
          <Styles.ParagraphWrapper className="paragraph-holder">
            <div style={{ padding: "0 30px" }}>
              <ul>
                {servicesData?.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </Styles.ParagraphWrapper>
        </Styles.AboutCard>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default About;
