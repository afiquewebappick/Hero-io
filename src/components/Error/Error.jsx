import React from "react";
import pageNotFoundImg from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto py-20">
        <div className="flex flex-col justify-center items-center p-4 sm:p-0">
          <img src={pageNotFoundImg} alt="" />
          <h1 className="mt-4 text-5xl">Oops, page not found!</h1>
          <p className="mt-2 mb-4 text-xl text-[#627382]">
            The page you are looking for is not available.
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

export default Error;
