import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { addCarSchema, initialCarValue } from "./addCarSchema";
import { models } from "../../../../Utils/Constants/Cars-information/Models";
import { bodyType } from "../../../../Utils/Constants/Cars-information/BodyType";
import { priceType } from "../../../../Utils/Constants/Cars-information/PriceType";
import { year } from "../../../../Utils/Constants/Cars-information/CarYear";
import { bodyColor } from "../../../../Utils/Constants/Cars-information/BodyColor";
import { interiorColor } from "../../../../Utils/Constants/Cars-information/InteriorColor";
import { engineValue } from "../../../../Utils/Constants/Cars-information/EngineValue";
import { engineType } from "../../../../Utils/Constants/Cars-information/EngineType";
import { fuelType } from "../../../../Utils/Constants/Cars-information/FuelType";
import { steeringWheel } from "../../../../Utils/Constants/Cars-information/SteeringWheel";
import { transmission } from "../../../../Utils/Constants/Cars-information/Transmission";
import controller from "../../controller";

const AddAdvert = ({ bool }) => {
  const { handleFormSubmit } = controller();
  const handleChangeModel = (e, setFieldValue) => {
    const selectedModel = e.target.value;
    setFieldValue("model", selectedModel);
    setFieldValue("brand", "");
  };
  return (
    <>
      <Formik
        initialValues={initialCarValue}
        validationSchema={addCarSchema}
        onSubmit={async (value, { resetForm }) => {
          await handleFormSubmit(value);
          resetForm();
        }}
      >
        {({ values, setFieldValue, errors }) => (
          <Form className="flex flex-col justify-center items-center w-full">
            <div
              className={`${
                bool ? "block" : "hidden"
              } flex flex-col justify-center items-center w-full`}
            >
              <div className="md:flex justify-center items-start w-full">
                <div className="w-full md:w-2/4 flex flex-col items-center">
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Model <span className="text-[red] text-[16px]">*</span>
                    </label>
                    <Field
                      className="w-[300px] text-[16px] border-2 outline-amber-500 border-gray-200  text-gray-900 rounded-lg block p-[10px]"
                      as="select"
                      name="model"
                      onChange={(e) => handleChangeModel(e, setFieldValue)}
                    >
                      <option value="">select</option>
                      {Object.keys(models).map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                    </Field>
                    <div className="text-red-500 text-sm my-[7px] text-[16px]">
                      <ErrorMessage name="model" />
                    </div>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Brand <span className="text-[red] text-[16px]">*</span>
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="brand"
                      disabled={!values.model}
                    >
                      <option value="">select</option>
                      {values.model &&
                        models[values.model].map((brand) => (
                          <option key={brand} value={brand.toLowerCase()}>
                            {brand}
                          </option>
                        ))}
                    </Field>
                    <div className="text-red-500 text-sm my-[7px] text-[16px]">
                      <ErrorMessage name="brand" />
                    </div>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Body-Type <span className="text-[red] text-[16px]">*</span>
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="bodyType"
                    >
                      <option value="">select</option>
                      {bodyType.map((body) => (
                        <option key={body} value={body.toLowerCase()}>
                          {body}
                        </option>
                      ))}
                    </Field>
                    <div className="text-red-500 text-sm my-[7px] text-[16px]">
                      <ErrorMessage name="bodyType" />
                    </div>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Mileage <span className="text-[red] text-[16px]">*</span>
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      type="text"
                      name="mileage"
                      placeholder="Car Mileage"
                    />
                    <div className="text-red-500 text-sm my-[7px] text-[16px]">
                      <ErrorMessage name="mileage" />
                    </div>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Km or Mile <span className="text-[red] text-[16px]">*</span>
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="kmml"
                    >
                      <option value="">select</option>
                      <option value="km">Km</option>
                      <option value="mile">Mile</option>
                    </Field>
                    <div className="text-red-500 text-sm my-[7px] text-[16px]">
                      <ErrorMessage name="kmml" />
                    </div>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Engine Value <span className="text-[red] text-[16px]">*</span>
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="engineValue"
                    >
                      <option value="">select</option>
                      {engineValue.map((L) => (
                        <option key={L} value={L}>
                          {L}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="text-red-500 text-sm my-[7px] text-[16px]">
                    <ErrorMessage name="engineValue" />
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Engine <span className="text-[red] text-[16px]">*</span>
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="engine"
                    >
                      <option value="">select</option>
                      {engineType.map((eng) => (
                        <option key={eng} value={eng.toLowerCase()}>
                          {eng}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="text-red-500 text-sm my-[7px] text-[16px]">
                    <ErrorMessage name="engine" />
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Fuel type
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="fuelType"
                    >
                      <option value="">select</option>
                      {fuelType.map((fuel) => (
                        <option key={fuel} value={fuel.toLowerCase()}>
                          {fuel}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
                <div className="w-full md:w-2/4 flex flex-col items-center">
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Price <span className="text-[red] text-[16px]">*</span>
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      type="text"
                      name="price"
                      placeholder="Car Price"
                    />
                    <div className="text-red-500 text-sm my-[7px] text-[16px]">
                      <ErrorMessage name="price" />
                    </div>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Price Type <span className="text-[red] text-[16px]">*</span>
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="priceType"
                    >
                      <option value="">select</option>
                      {priceType.map((price) => (
                        <option key={price} value={price}>
                          {price.toUpperCase()}
                        </option>
                      ))}
                    </Field>
                    <div className="text-red-500 text-sm my-[7px] text-[16px]">
                      <ErrorMessage name="priceType" />
                    </div>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Year <span className="text-[red] text-[16px]">*</span>
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="year"
                    >
                      <option value="">select</option>
                      {year.map((y) => (
                        <option key={y} value={y}>
                          {y.toString()}
                        </option>
                      ))}
                    </Field>
                    <div className="text-red-500 text-sm my-[7px] text-[16px]">
                      <ErrorMessage name="year" />
                    </div>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Body Color
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="bodyColor"
                    >
                      <option value="">select</option>
                      {bodyColor.map((color) => (
                        <option key={color} value={color.toLowerCase()}>
                          {color}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Interior Color
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="interiorColor"
                    >
                      <option value="">select</option>
                      {interiorColor.map((color) => (
                        <option key={color} value={color.toLowerCase()}>
                          {color}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Transmission
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="transmission"
                    >
                      <option value="">select</option>
                      {transmission.map((contagion) => (
                        <option key={contagion} value={contagion.toLowerCase()}>
                          {contagion}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="mb-[15px]">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                      Steering Wheel
                    </label>
                    <Field
                      className="w-[300px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="select"
                      name="steeringWheel"
                    >
                      <option value="">select</option>
                      {steeringWheel.map((rudder) => (
                        <option key={rudder} value={rudder.toLowerCase()}>
                          {rudder}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="mb-[15px]">
                    <label className="mb-2 text-sm font-medium flex justify-between mx-[10px] text-gray-900 text-[18px]">
                      Description <span>{values.description.length} / 250</span>
                    </label>
                    <Field
                      className="lg:w-[500px] w-[300px] resize-none min-h-[150px] border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block p-2.5"
                      as="textarea"
                      name="description"
                    />
                  </div>
                  <div className="text-red-500 text-sm my-[7px] text-[16px]">
                    <ErrorMessage name="description" />
                  </div>
                </div>
              </div>
              <div className="mb-[20px] mt-[40px]">
                <button
                  disabled={Object.keys(errors).length !== 0}
                  type="submit"
                  className="duration-300 disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed inline-flex items-center justify-center w-full bg-amber-500 hover:bg-amber-400 text-white py-2 px-4 border text-[18px] hover:text-black border-amber-500 rounded"
                >
                  Place your ad
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddAdvert;
