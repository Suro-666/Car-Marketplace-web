import React, { useState } from "react";
import { navRoutes } from "../../../Utils/Constants/Nav-routes/NavRoutes";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../../Store-Zustand/Auth/authStore";
import controller from "../controller";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userData } = useAuthStore();
  const { onLogOut } = controller();

  const handleLogOut = async () => {
    setIsOpen(false);
    await onLogOut();
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="block: md:hidden text-white cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute w-[100%] h-screen bg-[grey] top-0 right-0 flex-col`}
      >
        <div className="w-full bg-[#1D1B1B] flex h-[15%] justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-amber-500 hover:scale-[1.1] hover:text-white duration-300 font-bold text-[30px] pr-[20px] pt-[auto]"
          >
            X
          </button>
        </div>
        <div className="flex flex-col justify-around h-[70%] bg-amber-500">
          {navRoutes.map((route) => (
            <NavLink
              onClick={() => setIsOpen(false)}
              key={route.name}
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? " hover:text-black duration-300 border-y hover:bg-slate-100 border-black text-white text-[32px] font-bold px-[20px] py-[20px] flex justify-center items-center "
                  : " hover:text-black duration-300 border-y hover:bg-slate-100 border-black text-black text-[32px] font-bold px-[20px] py-[20px] flex justify-center items-center "
              }
            >
              {route.text}
            </NavLink>
          ))}
          {userData !== null ? (
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? " hover:text-black duration-300 border-y hover:bg-slate-100 border-black text-white text-[32px] font-bold px-[20px] py-[20px] flex justify-center items-center "
                  : " hover:text-black duration-300 border-y hover:bg-slate-100 border-black text-black text-[32px] font-bold px-[20px] py-[20px] flex justify-center items-center "
              }
              to="/profile"
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? " hover:text-black duration-300 border-y hover:bg-slate-100 border-black text-white text-[32px] font-bold px-[20px] py-[20px] flex justify-center items-center "
                  : " hover:text-black duration-300 border-y hover:bg-slate-100 border-black text-black text-[32px] font-bold px-[20px] py-[20px] flex justify-center items-center "
              }
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
        <div className="w-full h-[15%] bg-[#1D1B1B] flex justify-end">
          {userData !== null ? (
            <button onClick={handleLogOut} className="text-amber-500 pr-[20px] pt-[auto]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 hover:text-white duration-300 hover:scale-[1.1]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
