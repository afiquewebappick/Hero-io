import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Root from "../pages/Root/Root";
import axios from "axios";
import AppsPage from "../pages/Appss/AppsPage";
import AppDetails from "../components/Apps/AppDetails";
import AppFoundError from "../pages/AppFoundError/AppFoundError";
import ErrorRoutes from "../pages/ErrorRoutes/ErrorRoutes";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    HydrateFallback: LoadingSpinner,
    // errorElement: <ErrorRoutes></ErrorRoutes>,
    children: [
      {
        index: true,
        Component: Root,
        loader: () => axios("/appData.json"),
      },
      {
        path: "/apps",
        Component: AppsPage,
        loader: () => axios("/appData.json"),
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
        errorElement: <AppFoundError></AppFoundError>,
      },
      {
        path: "/installation",
        Component: Installation,
        loader: () => axios("/appData.json"),
      }
    ],
  },
  {
    path: "*",
    Component: ErrorRoutes
  }
]);
