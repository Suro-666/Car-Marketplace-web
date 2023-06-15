import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router";
import { db } from "../../../firebase";
import { useEffect, useState } from "react";

export const controller = () => {
  const [car, setCar] = useState(null);
  const { carId } = useParams();

  useEffect(() => {
    getCarById()
  }, [carId]);

  async function getCarById() {
    try {
      const carDoc = doc(db, "cars", carId);
      const carData = await getDoc(carDoc);
      setCar(carData.data().carData);
    } catch (error) {
      console.error(error.message);
    }
  }

  return { car };
};
