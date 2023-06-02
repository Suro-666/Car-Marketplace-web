import React from "react";
import AuthHoc from "./AuthHoc";
import { useNavigate } from "react-router";

const Button = ({ text, path }) => {
  const navigate = useNavigate();
  return (
    <button
      className="text-[18px] hover:scale-105 disabled:cursor-not-allowed inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 font-bold hover:text-white text-black py-1 px-4 rounded duration-200"
      onClick={() => navigate(path)}
    >
      {text}
    </button>
  );
};

export default AuthHoc(Button);
