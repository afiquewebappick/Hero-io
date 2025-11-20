import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getStoreItem, removeFromStoreDB } from "../../utility/addToDB";
import Select from "react-select";
import Install from "./install";

const InstallList = () => {
  const [installList, setInstallList] = useState([]);
  const [sortType, setSortType] = useState("");
  const { data: apps } = useLoaderData();
  const sortTypes = [
    { value: "highLow", label: "Hight-Low" },
    { value: "LowHigh", label: "Low-High" },
  ];

  useEffect(() => {
    const storeData = getStoreItem();
    const filterList = apps.filter((app) => storeData.includes(app.id));
    setInstallList(filterList);
  }, [apps]);

  const handleSort = (type) => {
    setSortType(type);
    if (type === "LowHigh") {
      const newData = [...installList].sort(
        (a, b) => a.downloads - b.downloads
      );
      // console.log(newData);
      setInstallList(newData);
    }
    if (type === "highLow") {
      const newData = [...installList].sort(
        (a, b) => b.downloads - a.downloads
      );
      // console.log(newData);
      setInstallList(newData);
    }
  };

  const handleUninstall = (id) => {
    removeFromStoreDB(id);
    const newData = installList.filter((a) => a.id !== id);
    setInstallList(newData);
  };
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto py-20">
        <div className="text-center sm:p-0 p-4">
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">
            {installList.length === 0
              ? "No Install App Found"
              : "Your Installed Apps"}
          </h1>
          <p className="text-[#627382] sm:text-xl text-sm">
            {installList.length === 0 ? (
              <Link
                to={"/apps"}
                rel="noopener noreferrer"
                className="btn mt-4 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded px-4 py-3 hover:-translate-y-0.5"
              >
                Browse App
              </Link>
            ) : (
              "Explore All Trending Apps on the Market developed by us"
            )}
          </p>
        </div>

        {installList.length > 0 && (
          <div className="mt-10 flex justify-between items-center lg:p-0 p-4">
            <div>
              <h3 className="sm:text-2xl text-base font-semibold">
                {installList.length} Apps Found
              </h3>
            </div>
            <div className="sm:max-w-[151px] max-w-[135px]">
              <Select
                className="text-center border-1 border-[#D2D2D2] rounded text-sm"
                options={sortTypes}
                value={sortType.value}
                onChange={(opt) => handleSort(opt.value)}
                placeholder="Sort By Size"
              />
            </div>
          </div>
        )}

        <div className="mt-4">
          {installList.map((install) => (
            <Install
              key={install.id}
              install={install}
              handleUninstall={handleUninstall}
            ></Install>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallList;
