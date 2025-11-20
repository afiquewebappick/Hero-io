import React, { useEffect, useState } from "react";
import Links from "./Links";
import { IoIosMenu } from "react-icons/io";
import { TbXboxXFilled } from "react-icons/tb";
import { Link } from "react-router";
import "./links.css";
import logoImg from "../../assets/logo.png";
import gitImg from "../../assets/github.png";

const navigationData = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "Apps",
    path: "/apps",
    id: 2,
  },
  {
    name: "Installation",
    path: "/installation",
    id: 3,
  },
];

const Navbar = () => {
  const links = navigationData.map((nav) => (
    <Links key={nav.id} nav={nav}></Links>
  ));
  const [isOpen, setIsOpen] = useState(false);
  // scroll handle
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`sticky top-0 z-50 transition-all duration-0 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-transparent"
      }`}>
      <nav
        className={`flex justify-between items-center pt-7 max-w-6xl lg:mx-auto mx-5 md:py-7 ${
          !isOpen ? "pb-7" : ""
        }`}
      >
        <div className="flex items-center gap-x-3">
          {isOpen ? (
            <TbXboxXFilled
              className="text-3xl md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            ></TbXboxXFilled>
          ) : (
            <IoIosMenu
              className="text-3xl md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            ></IoIosMenu>
          )}
          <h3 className="text-xl font-extrabold">
            <Link
              to={`/`}
              className="flex items-center gap-x-1 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent"
            >
              <img className="h-10 w-10" src={logoImg} alt="" />
              HERO.IO
            </Link>
          </h3>
        </div>

        <ul className="md:flex hidden gap-x-8 font-medium">{links}</ul>

        <div className="md:block hidden">
          <Link
            to={"https://github.com/Afiqu3"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded px-4 py-3 hover:-translate-y-0.5"
          >
            <img src={gitImg} alt="" />
            Contribute
          </Link>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden mt-2 mb-5 ml-10 space-y-3 max-w-45 relative h-35">
          <ul className={`space-y-3 animation`}>{links}</ul>
          <div>
            <Link
              to={"https://github.com/Afiqu3"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded px-4 py-3 animation"
            >
              <img src={gitImg} alt="" />
              Contribute
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
