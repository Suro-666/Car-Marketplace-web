import React from "react";
import { controller } from "../controller";
import Spinner from "../../../Components/Spinner/Spinner";
import CarCard from "./CarCard";

const CarsBlock = () => {
  const { carsData } = controller();
  return (
    <div className={`w-3/4 ${carsData ? '' : 'min-h-[500px]'}`}>
      {carsData ? (
        <div className="flex flex-wrap ">
          {carsData.map((car) => (
            <CarCard key={car.carId} car={car} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default CarsBlock;
