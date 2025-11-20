import React from "react";
import Apps from "../../components/Apps/Apps";
import { useLoaderData } from "react-router";

const AppsPage = () => {
  const { data: apps } = useLoaderData();
  return (
    <div>
      <title>Apps</title>
      <Apps apps={apps}></Apps>
    </div>
  );
};

export default AppsPage;
