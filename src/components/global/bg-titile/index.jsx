import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AssetsList } from "../../elements/assetsList";

import Button from "../../elements/button";

import PageDimensions from "../../../styles/pageDimensions";

import * as Styles from "./styles";

const BgTitle = ({ routes }) => {
  const { pathname } = useLocation();

  const { width } = PageDimensions();

  const isMobile = width < 659;

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isProjects = pathname === "/projects";
  const isClients = pathname === "/clients";
  const isContact = pathname === "/contactus";

  if (
    pathname.includes("/projects/") &&
    pathname.length > "/projects/".length
  ) {
    return null;
  }

  const { name } = routes.find((item) => item.path === pathname);

  const { home, about, projects, clients, contact } = AssetsList.titleBg;

  const currentBg = isHome
    ? home
    : isAbout
    ? about
    : isProjects
    ? projects
    : isClients
    ? clients
    : isContact
    ? contact
    : home;


  return (
    <Styles.Container img={currentBg} small={true}>
      <Styles.Overlay />
      <Styles.Wrapper className="px-sm-5">
        <Styles.Holder
          className={pathname === "/contactus" ? `py-sm-1` : `py-sm-5`}
        >
          {/* <Styles.Title className="pt-4 pb-1">{name}</Styles.Title> */}

          <>
            <Styles.Title className="pt-2 pb-2">
              We Provide Best Retrofitting Structural Strengthening Services
            </Styles.Title>
            {/* <Styles.SubTitle>
                The largest real estate hub with various services
              </Styles.SubTitle> */}
          </>
          {!isContact ? (
            <Link to="/contactus">
              <Button className="my-3">Contact us</Button>
            </Link>
          ) : null}
        </Styles.Holder>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default BgTitle;
