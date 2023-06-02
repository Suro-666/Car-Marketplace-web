import * as Yup from "yup";

export const addCarSchema = Yup.object({
  model: Yup.string().required("Select car model"),
  brand: Yup.string().required("Select car brand"),
  bodyType: Yup.string().required("Select car body type"),
  mileage: Yup.string()
    .max(7)
    .matches(/^\d+$/, "Only numbers")
    .required("Please indicate the mileage of the car"),
  kmml: Yup.string().required("Required"),
  price: Yup.string().matches(/^\d+$/, "Only numbers").required("Required"),
  priceType: Yup.string().required("Required"),
  year: Yup.string().required("Please select the year of the car"),
  bodyColor: Yup.string(),
  interiorColor: Yup.string(),
  engineValue: Yup.string().required("Please select to engine value"),
  engine: Yup.string().required("Please select the type of engine"),
  fuelType: Yup.string(),
  transmission: Yup.string(),
  steeringWheel: Yup.string(),
  description: Yup.string().max(250, "Maximum 250 characters"),
});

export const initialCarValue = {
  model: "",
  brand: "",
  bodyType: "",
  mileage: "",
  kmml: "",
  price: "",
  priceType: "",
  year: "",
  bodyColor: "",
  interiorColor: "",
  engineValue: "",
  engine: "",
  fuelType: "",
  transmission: "",
  steeringWheel: "",
  description: "",
};
