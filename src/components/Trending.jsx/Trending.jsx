import React from "react";
import { Link } from "react-router";
import App from "../Apps/App";

const Trending = ({ apps }) => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto py-20">
        <div className="text-center sm:p-0 p-4">
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">Trending Apps</h1>
          <p className="text-[#627382] sm:text-xl text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 p-2 lg:p-0 ">
          {apps.slice(0, 8).map((app) => (
            <App key={app.id} app={app}></App>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to={"/apps"}
            target="_parent"
            className="btn w-[145px] bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded px-4 py-3 hover:-translate-y-0.5"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trending;
