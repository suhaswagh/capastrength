import React from "react";

import { Link } from "react-router-dom";

// import { iconList } from "../../elements/iconList";

import { Mail, Facebook, Instagram, Twitter, Linkedin } from "react-feather";

// import { AssetsList } from "../../elements/assetsList";

import Logo from "../logo";

import * as Styles from "./styles";

const AppFooter = () => {
  return (
    <Styles.Container>
      <Styles.MainFooter>
        <div className="container">
          <Styles.RowHolder>
            <Styles.ImageWrapper>
              <Logo />
            </Styles.ImageWrapper>
            <a href="mailto:contact@capastrength.com">
              <Styles.EmailWrapper>
                <Mail />
                <Styles.TextHolder>contact@capastrength.com</Styles.TextHolder>
              </Styles.EmailWrapper>
            </a>

            <Styles.SocialWrapper className="mt-3 mt-md-0">
              <Styles.SocialHolder>
                <Link to="facebook.com">
                  <Facebook />
                </Link>
                <Link to="facebook.com">
                  <Instagram />
                </Link>
                <Link to="facebook.com">
                  <Twitter />
                </Link>
                <Link to="facebook.com">
                  <Linkedin />
                </Link>
              </Styles.SocialHolder>
            </Styles.SocialWrapper>
          </Styles.RowHolder>
        </div>
      </Styles.MainFooter>
      {/* <Styles.MenuContainer className="flex-wrap flex-md-nowrap">
        <div className="container">
          <Styles.MenuListHolder>
            <Styles.MenuListItem>
              <Link to="/">Home</Link>
            </Styles.MenuListItem>
            <Styles.MenuListItem>
              <Link to="/about">About</Link>
            </Styles.MenuListItem>
            <Styles.MenuListItem>
              <Link to="/contactus">Contact</Link>
            </Styles.MenuListItem>
            <Styles.MenuListItem>
              <Link to="/projects">Projects</Link>
            </Styles.MenuListItem>
            <Styles.MenuListItem>
              <Link to="/">Join us</Link>
            </Styles.MenuListItem>
            <Styles.MenuListItem>
              <Link to="/tandc">T{"&"}C</Link>
            </Styles.MenuListItem>
          </Styles.MenuListHolder>
        </div>
      </Styles.MenuContainer> */}
      <Styles.CopyrightWrapper>
        <div className="container">
          <Styles.TextHolder>
            Copyright © 2022 CapaStrength. All rights reserved.{" "}
            <Link to="/tandc">read T & C</Link>
          </Styles.TextHolder>
        </div>
      </Styles.CopyrightWrapper>
    </Styles.Container>
  );
};

export default AppFooter;
