import React from "react";
import { Link, NavLink } from "react-router";
// import styles from "./links.module.css";

const Links = ({ nav }) => {
  return (
    <li className="hover:text-blue-500">
      <NavLink
        to={nav.path}
        className={`p-2 text-[#000000e6] font-medium`}
        // className={({ isActive }) =>
        //   `${styles.link} ${isActive ? styles.active : ""}`
        // }
        style={({ isActive }) => ({
          fontWeight: isActive ? "600" : "",
          lineHeight: isActive ? "19px" : "",
          background: isActive
            ? "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)"
            : "",
          letterSpacing: isActive ? "0%" : "",
          textAlign: isActive ? "left" : "",
          textTransform: isActive ? "capitalize" : "",
          WebkitBackgroundClip: isActive ? "text" : "",
          WebkitTextFillColor: isActive ? "transparent" : "",
          borderBottom: isActive ? "1px solid #9f62f2": "",
        })}
      >
        {nav.name}
      </NavLink>
    </li>
  );
};

export default Links;
