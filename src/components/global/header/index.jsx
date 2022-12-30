import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import AppLogo from "../logo";

import Button from "../../elements/button";

import MobileMenu from "./mobile";
import PageDimensions from "../../../styles/pageDimensions";
import { Menu } from "react-feather";

import * as Styles from "./styles";

const AppHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  const { width } = PageDimensions();

  const isMobile = width < 659;

  const handleMobileMenu = () => {
    if (isMobile) {
      setMobileMenu(!mobileMenu);
    }
  };

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <Styles.Header>
      <Styles.Container className="container">
        <Styles.Wtapper>
          <AppLogo />
          {isMobile ? (
            <Styles.MobileMenuContainer>
              <Menu onClick={handleMobileMenu} />
              <MobileMenu
                handleMobileMenu={handleMobileMenu}
                active={mobileMenu}
              />
            </Styles.MobileMenuContainer>
          ) : (
            <Styles.MenuContainer>
              <Styles.MenuListWrapper>
                <Styles.MenuItem active={pathname === "/"}>
                  <Link to="/">Home</Link>
                </Styles.MenuItem>
                <Styles.MenuItem active={pathname === "/about"}>
                  <Link to="/about">About</Link>
                </Styles.MenuItem>
                <Styles.MenuItem active={pathname === "/projects"}>
                  <Link to="/projects">Projects</Link>
                </Styles.MenuItem>
                <Styles.MenuItem active={pathname === "/clients"}>
                  <Link to="/clients">Clients</Link>
                </Styles.MenuItem>
                <Styles.MenuItem active={pathname === "/contactus"}>
                  <Link to="/contactus">
                    <Button>Contact us</Button>
                  </Link>
                </Styles.MenuItem>
              </Styles.MenuListWrapper>
            </Styles.MenuContainer>
          )}
        </Styles.Wtapper>
      </Styles.Container>
    </Styles.Header>
  );
};

export default AppHeader;
