import React from "react";
import { Link } from "react-router";
import googleStoreImg from '../../assets/googleStore.png';
import appStoreImg from '../../assets/appStore.png';
import heroImg from '../../assets/hero.png'

const Banner = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="sm:max-w-[597px] mx-auto">
            <h1 className="text-center sm:text-7xl text-3xl font-bold">We Build <span className="text-[#8854eb]">Productive</span> Apps</h1>
        </div>
        <div className="text-center mt-4">
            <p className="text-[#627382] text-sm sm:text-base">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        </div>
        <div className="flex sm:flex-row flex-col justify-center pt-10 gap-4 sm:p-0 p-20 sm:mt-10 mt-5">
            <Link to={'https://play.google.com/store/games?device=phone&hl=en'} className="btn drop-shadow-xl border-1 border-[#d2d2d2] rounded sm:py-3 sm:px-6 sm:text-xl text-sm font-semibold hover:-translate-y-0.5"> <img className="w-5 h-5 sm:w-8 sm:h-8" src={googleStoreImg} alt="" />Googly Play</Link>
            <Link to={'https://www.apple.com/app-store/'} className="btn drop-shadow-xl border-1 border-[#d2d2d2] rounded sm:py-3 sm:px-6 sm:text-xl text-sm font-semibold hover:-translate-y-0.5"><img className="w-5 h-5 sm:w-8 sm:h-8" src={appStoreImg} alt="" />Googly Play</Link>
        </div>
        <div className="flex justify-center lg:mt-10 mt-3">
            <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
