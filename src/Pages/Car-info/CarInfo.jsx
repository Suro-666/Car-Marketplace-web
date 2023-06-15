import React from "react";
import { controller } from "./controller";
import Spinner from "../../Components/Spinner/Spinner";

const CarInfo = () => {
  const { car } = controller();
  return (
    <div className={`w-full xl:w-[1280px] p-[28px] m-auto bg-white min-h-screen ${car ? '' : 'flex justify-center items-center'}`}>
      {car ? (
        <div className="w-full flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="w-2/4 p-[10px] h-[600px]">
              <img className="w-full h-full hover:scale-[1.02] duration-300 cursor-pointer" src="\src\Assets\Images\default.car.jpg" alt="" />
            </div>
            <div className="w-2/4 p-[10px] flex flex-col">
              <span>Model : {car.model}</span>
              <span>Brand : {car.brand}</span>
              <span>Steering Wheel : {car.steeringWheel.toUpperCase()}</span>
            </div>
          </div>
          <div className="p-[10px]">Description block</div>
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default CarInfo;
