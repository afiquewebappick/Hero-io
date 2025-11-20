import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { ToastContainer } from "react-toastify";

const RootLayouts = () => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default RootLayouts;
