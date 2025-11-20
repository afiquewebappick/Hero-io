import React from "react";
import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center my-50">
      <RingLoader></RingLoader>
    </div>
  );
};

export default LoadingSpinner;
