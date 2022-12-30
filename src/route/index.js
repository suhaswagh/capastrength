import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loading from "../components/global/loading";

import ScrollToTop from "../components/global/scroll-to-top";

import AppHeader from "../components/global/header";
import BgTitle from "../components/global/bg-titile";
import Signup from "../components/global/signup";
import AppFooter from "../components/global/footer";

import Slider from "../components/global/slider";

import { AllRoutes } from "./routeData";

const AppRoute = () => {
  return (
    <>
      <AppHeader />
      <BgTitle routes={AllRoutes} />
      {/* <Slider /> */}
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          {AllRoutes.map((route, index) => {
            return (
              <Route
                key={route.path + index}
                exact
                path={route.path}
                element={<route.component {...route.props} />}
              />
            );
          })}
        </Routes>
      </Suspense>
      {/* <Signup /> */}
      <AppFooter />
    </>
  );
};

export default AppRoute;
