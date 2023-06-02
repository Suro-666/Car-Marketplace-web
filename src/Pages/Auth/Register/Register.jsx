import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { registerSchema } from "./RegisterSchema";
import controller from "./controller";
import Spinner from "../../../Components/Spinner/Spinner";
import ShowPassword from "../../../Components/Show-Password-Eye/ShowPassword";

const Register = () => {
  const { onRegister, loading } = controller();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full xl:w-[1280px] m-auto bg-white min-h-screen flex flex-col justify-center items-center">
      <div className={`${loading ? 'hidden' : 'block'} mb-[50px] font-bold text-[22px]`}>
        Fill in the fields to register a new account
      </div>
      <div className="mx-[20px] flex flex-col justify-center items-center">
        {loading ? (
          <Spinner />
        ) : (
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(value) => onRegister(value)}
          >
            <Form className="w-[250px] sm:w-[380px] lg:w-[500px]">
              <div className="mb-[15px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                  Name
                </label>
                <Field
                  name="name"
                  className="border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
                <div className="text-red-500 text-sm mt-[5px] text-[16px]">
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div className="mb-[15px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                  Surname
                </label>
                <Field
                  name="surname"
                  className="border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
                <div className="text-red-500 text-sm mt-[5px] text-[16px]">
                  <ErrorMessage name="surname" />
                </div>
              </div>
              <div className="mb-[15px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                  E-mail
                </label>
                <Field
                  name="email"
                  className="border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
                <div className="text-red-500 text-sm mt-[5px] text-[16px]">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div className="mb-[15px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 text-[18px]">
                  Password
                </label>
                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="border-2 outline-amber-500 border-gray-200  text-gray-900 text-sm rounded-lg block w-full py-[10px] pl-[10px] pr-[45px]"
                  />
                  <ShowPassword top={10} right={10} bool={showPassword} fn={setShowPassword} />
                </div>
                <div className="text-red-500 text-sm mt-[5px] text-[16px]">
                  <ErrorMessage name="password" />
                </div>
              </div>
              <div className="mb-[20px] mt-[40px]">
                <button
                  type="submit"
                  className="duration-300  disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed inline-flex items-center justify-center w-full bg-amber-500 hover:bg-amber-400 text-white py-2 px-4 border text-[18px] hover:text-black border-amber-500 rounded"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default Register;
