import React from "react";
import { Route, Routes } from "react-router";
import DefaultPage from "../Pages/Default-page/Home";
import Cars from "../Pages/Cars/Cars.jsx";
import Login from "../Pages/Auth/Login/Login";
import NotFound from "../Pages/404/NotFound";
import Contacts from "../Pages/Contacts/Contacts";
import Register from "../Pages/Auth/Register/Register";
import Profile from "../Pages/Profile/Profile";
import CarInfo from "../Pages/Car-info/CarInfo";

const RouterManager = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<DefaultPage />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/car-info/:carId" element={<CarInfo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return routes;
};

export default RouterManager;
