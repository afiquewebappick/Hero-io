import React from "react";
import appNotFoundImg from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto py-20">
        <div className="flex flex-col justify-center items-center p-4 sm:p-0">
          <img src={appNotFoundImg} alt="" />
          <h1 className="mt-4 text-5xl">OPPS!! APP NOT FOUND</h1>
          <p className="mt-2 mb-4 text-xl text-[#627382]">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded px-4 py-3"
          >
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
