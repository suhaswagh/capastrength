import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppLogo from "../../logo";

import { X } from "react-feather";

import * as Styles from "./styles";

const MobileMenu = ({ active, handleMobileMenu }) => {
  const { pathname } = useLocation();

  console.log({ active });

  return (
    <Styles.Header active={active}>
      <Styles.Container className="container">
        <Styles.MobileMenuContainer>
          <X onClick={handleMobileMenu} />
        </Styles.MobileMenuContainer>
        <Styles.Wtapper>
          <AppLogo />
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
              <Styles.MenuItem
                active={pathname === "/contactus"}
                className="button"
              >
                <Link to="/contactus">Contact us</Link>
              </Styles.MenuItem>
            </Styles.MenuListWrapper>
          </Styles.MenuContainer>
        </Styles.Wtapper>
      </Styles.Container>
    </Styles.Header>
  );
};

export default MobileMenu;
