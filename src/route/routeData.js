import { lazy } from "react";

export const AllRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/home")),
    props: {
      titel: "Home",
    },
  },
  {
    name: "About",
    path: "/about",
    component: lazy(() => import("../pages/about")),
    props: {},
  },
  {
    name: "Projects",
    path: "/projects",
    component: lazy(() => import("../pages/projects")),
    props: {},
  },
  {
    name: "Clients",
    path: "/clients",
    component: lazy(() => import("../pages/clients")),
    props: {},
  },
  {
    name: "Projects",
    path: "/projects/:id",
    component: lazy(() => import("../pages/projects/details-page")),
    props: {},
  },
  {
    name: "Contact Us",
    path: "/contactus",
    component: lazy(() => import("../pages/contact-us")),
    props: {},
  },
  {
    name: "Tearms & Condition",
    path: "/tandc",
    component: lazy(() => import("../pages/t&c")),
    props: {},
  },
  {
    name: "Loading",
    path: "*",
    component: lazy(() => import("../components/global/loading")),
    props: {},
  },
];
