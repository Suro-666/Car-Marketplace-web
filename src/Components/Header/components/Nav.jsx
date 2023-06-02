import React from "react";
import { NavLink } from "react-router-dom";
import { navRoutes } from "../../../Utils/Constants/Nav-routes/NavRoutes";

const Nav = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      {navRoutes.map((route) => (
        <NavLink
          key={route.name}
          to={route.path}
          className={({ isActive }) =>
            isActive
              ? " hover:text-amber-500 duration-200 text-amber-500 text-[22px]"
              : " hover:text-amber-500 duration-200 text-white text-[22px]"
          }
        >
          {route.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
