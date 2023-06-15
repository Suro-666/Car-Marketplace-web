import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebase";
import { useCarsStore } from "./cars";
import { useEffect } from "react";

export const controller = () => {
  const { setCars, carsData } = useCarsStore();

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    try {
      const carQuery = query(collection(db, "cars"));
      console.log(carQuery)
      const { docs } = await getDocs(carQuery);
      let tmp = [];
      docs.forEach((car) => tmp.push(car.data().carData));
      setCars(tmp);
    } catch (error) {
      console.error(error.message);
    }
  }

  return { carsData };
};
