import React from "react";
import { useNavigate } from "react-router";

const CarCard = ({ car }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/car-info/${car.carId}`)} className="w-[31%] mx-auto my-[10px] hover:border rounded-[5px] hover:scale-[1.02] p-[10px] hover:bg-[#E8EAED] cursor-pointer duration-300 h-[400px] flex flex-col justify-between">
      <div className="w-full h-[60%] rounded-[5px] duration-300 ">
        <img
          className="w-full h-full rounded-[5px]"
          src="\src\Assets\Images\default.car.jpg"
          alt=""
        />
      </div>
      <div className="w-full flex justify-between my-[2px]">
        <span className="font-bold text-[20px]">{car.model}</span>
        <span className="font-bold text-[20px]">{car.brand}</span>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between">
          <span className="font-bold text-[20px]">{car.price} $</span>
          <span className="text-[20px]">{car.year}</span>
        </div>
        <span className="text-[20px]">Engine value : {car.engineValue} L</span>
        <span className="text-[20px]">Fuel Type : {car.fuelType.toUpperCase()}</span>
        <span className="text-[20px]">
          Mileage : {car.mileage}
          {car.kmml}
        </span>
      </div>
    </div>
  );
};

export default CarCard;
