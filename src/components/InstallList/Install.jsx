import React from "react";
import downloadImg from "../../assets/download.png";
import starImg from "../../assets/star.png";

const Install = ({ install, handleUninstall }) => {
  const { id, image, title, downloads, size, ratingAvg } = install;
  return (
    <div className="card bg-base-100 p-4 mb-4">
      <div className="flex sm:flex-row flex-col items-center justify-between">
        <div className="flex sm:flex-row flex-col">
          <div className="flex justify-center items-center">
            <img className="w-20 h-20 rounded-lg" src={image} alt="" />
          </div>
          <div className="ml-4 mt-4 sm:mt-0">
            <h3 className="text-xl text-center sm:text-left">{title}</h3>
            <div className="mt-4 flex gap-4">
              <div className="flex items-center">
                <img src={downloadImg} alt="" />
                <p className="text-[#00d390] ml-1">{downloads}M</p>
              </div>
              <div className="flex items-center">
                <img src={starImg} alt="" />
                <p className="text-[#ff8811] ml-1">{ratingAvg}</p>
              </div>
              <div className="flex items-center">
                <p className="text-[#627382] ml-1">{size} MB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-0">
          <button
            onClick={() => handleUninstall(id)}
            className="btn bg-[#00d390] text-white rounded"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default Install;
