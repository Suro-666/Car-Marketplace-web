import { loginSchema, forgotPasswordsValidationSchema } from "./LoginSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import controller from "./controller";
import { Modal } from "antd";
import Spinner from "../../../Components/Spinner/Spinner";
import ShowPassword from "../../../Components/Show-Password-Eye/ShowPassword";

const SignIn = () => {
  const { onLogin, handleForgotPassword, loading, emailChecked } = controller();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full xl:w-[1280px] m-auto bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="mb-[50px] font-bold text-[22px]">Sign In</div>
      <div className="mx-[20px] flex flex-col justify-center items-center">
        <div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={async (value, { resetForm }) => {
              await onLogin(value);
              resetForm();
            }}
          >
            <Form className="w-auto lg:w-[500px]">
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
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="border-2 ring-inherit ring-offset-0 ring-offset-inherit outline-amber-500 border-gray-200 focus:border-amber-500 focus:shadow-none text-gray-900 text-sm rounded-lg block w-full py-[10px] pl-[10px] pr-[45px]"
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
                  Login
                </button>
              </div>
            </Form>
          </Formik>
          <div className="mt-[10px] w-full flex justify-between items-center gap-5 h-auto min-h-[35px]">
            <button
              onClick={() => setIsOpen(true)}
              className="text-[18px] hover:border-b hover:border-black hover:scale-[1.1] duration-300 hover:text-black text-amber-500"
            >
              Forgot password?
            </button>
            <button
              onClick={() => navigate("/register")}
              className="text-[18px] hover:border-b hover:border-black hover:scale-[1.1] duration-300 hover:text-black text-amber-500"
            >
              Create new account
            </button>
          </div>

          {/* Forgot Password Modal */}
          <Modal
            open={isOpen}
            title={`Forgot Password`}
            onCancel={() => setIsOpen(false)}
            footer={null}
          >
            {loading ? (
              <pre className="py-[20px] min-h-[200px] px-[10px] flex justify-center items-center">
                <Spinner />
              </pre>
            ) : (
              <pre className="py-[20px] px-[10px] flex justify-center items-center">
                <div className="min-h-[200px] w-full flex justify-center items-center gap-[10px]">
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                      repeatPassword: "",
                    }}
                    validationSchema={forgotPasswordsValidationSchema}
                    onSubmit={async (value, { resetForm }) => {
                      if (value.password === value.repeatPassword) {
                        await handleForgotPassword(value, setIsOpen);
                        resetForm();
                      }
                    }}
                  >
                    {({ errors }) => (
                      <Form className="w-full flex flex-col justify-center items-center gap-[20px]">
                        <label>Change Password</label>
                        <div className="my-[5px] w-full flex flex-col justify-center items-center">
                          <Field
                            placeholder="Your E-mail"
                            type="email"
                            name="email"
                            className="border border-black w-2/3 py-[5px] px-[7px] text-[16px] outline-none"
                          />
                          <div className="text-red-500 text-sm ml-[2px] my-[7px] text-[16px]">
                            <ErrorMessage name="email" />
                          </div>
                        </div>
                        <div className="my-[5px] w-full flex flex-col justify-center items-center">
                          <Field
                            placeholder="New password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="border border-black w-2/3 py-[5px] px-[7px] text-[16px] outline-none"
                          />
                          <div className="text-red-500 text-sm ml-[2px] my-[7px] text-[16px]">
                            <ErrorMessage name="password" />
                          </div>
                        </div>
                        <div className="my-[5px] w-full flex flex-col justify-center items-center">
                          <div className="relative w-full flex justify-center items-center">
                            <Field
                              placeholder="Repeat password"
                              type={showPassword ? "text" : "password"}
                              name="repeatPassword"
                              className="border border-black w-2/3 py-[5px] pl-[7px] pr-[35px] text-[16px] outline-none"
                            />
                            <ShowPassword
                              top={6}
                              right={81}
                              bool={showPassword}
                              fn={setShowPassword}
                            />
                          </div>
                          <div className="text-red-500 text-sm ml-[2px] my-[7px] text-[16px]">
                            <ErrorMessage name="repeatPassword" />
                          </div>
                        </div>
                        <button
                          type="submit"
                          disabled={Object.keys(errors).length !== 0}
                          className="disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed py-[4px] px-[15px] font-bold hover:scale-[1.1] duration-300 ml-[5px] bg-amber-300"
                        >
                          Update
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </pre>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
