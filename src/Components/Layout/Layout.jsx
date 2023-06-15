import React, { useEffect, Suspense } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useAuthStore } from "../../Store-Zustand/Auth/authStore";
import { useLocation, useNavigate } from "react-router";

const Layout = ({ children }) => {
  const { userData } = useAuthStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/login" && userData !== null) {
      navigate("/");
    } else if (pathname === "/register" && userData !== null) {
      navigate("/");
    } else if (pathname === "/profile" && userData === null) {
      navigate("/");
    } 
  }, [userData, pathname]);

  return (
    <>
      <Header />
      <div className="xl:pt-[90px] pt-[120px] flex-grow flex justify-center items-start bg-[#E8EAED]">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
