import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";
import ReviewChart from "../ReviewChart/ReviewChart";
import { addToStoreToDB, getStoreItem } from "../../utility/addToDB";
import './appDetailsBtn.css';

const AppDetails = () => {
  const [install, setInstall] = useState(false);
  const location = useLocation();
  const { state: app } = location;
  const {
    id,
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;
  useEffect(() => {
    const installList = getStoreItem();
    const markInstall = installList.find((b) => b === id);
    markInstall && setInstall(true);
  }, [id]);
  const handleInstall = () => {
    // console.log(id)
    addToStoreToDB(id);
    setInstall(true);
  };
  return (
    <div className="bg-[#f5f5f5]">
      <title>{title}</title>
      <div className="max-w-6xl mx-auto py-20">
        <div className="flex sm:flex-row flex-col">
          <div className="flex-1 flex justify-center items-center">
            <img
              className="lg:w-[350px] lg:h-[350px] w-[200px] h-[200px]"
              src={image}
              alt=""
            />
          </div>
          <div className="flex-3 sm:ml-10 sm:mt-0 mt-10">
            <div className="mb-[29.5px] sm:text-left text-center">
              <h3 className="text-3xl font-bold mb-2">{title}</h3>
              <p className="text-xl text-[#627382]">
                Developed by{" "}
                <span className="text-[#986eec]">{companyName}</span>
              </p>
            </div>
            <div className="border-1 border-[#001931] opacity-5 mb-[30.5px]"></div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 sm:p-0 p-4">
              <div className="sm:block flex flex-col justify-center items-center">
                <img src={downloadIcon} alt="" />
                <p className="text-[#001931cc] mt-2">Downloads</p>
                <h2 className="text-4xl font-extrabold">{downloads}M</h2>
              </div>
              <div className="sm:block flex flex-col justify-center items-center">
                <img src={ratingIcon} alt="" />
                <p className="text-[#001931cc] mt-2">Average Ratings</p>
                <h2 className="text-4xl font-extrabold">{ratingAvg}</h2>
              </div>
              <div className="sm:block flex flex-col justify-center items-center">
                <img src={reviewsIcon} alt="" />
                <p className="text-[#001931cc] mt-2">Total Reviews</p>
                <h2 className="text-4xl font-extrabold">{reviews / 1000}K</h2>
              </div>
            </div>
            <div className="mt-8.5 sm:p-0 p-4 text-center sm:text-left">
              <button
                onClick={() => handleInstall()}
                disabled={install}
                className={`btn ${!install && 'glitter'} bg-[#00d390] text-white rounded shadow-md drop-shadow-2l disabled:!bg-[#00d390] disabled:text-white disabled:opacity-100 disabled:cursor-not-allowed disabled:drop-shadow-xl`}
              >
                {install ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-11 mb-10 border-1 border-[#001931] opacity-5"></div>
        <div className="w-[100%] h-[300px]">
          <h3 className="text-2xl font-semibold pl-4 lg:pl-0">Ratings</h3>
          <ReviewChart ratings={ratings}></ReviewChart>
        </div>

        <div className="mt-10 mb-10 border-1 border-[#001931] opacity-5"></div>
        <div className="mb-10 p-4 lg:p-0">
          <h3 className="text-2xl font-semibold">Description</h3>
          <p className="mt-6 text-xl text-[#627382]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
