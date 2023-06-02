import { Modal } from "antd";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useState } from "react";
import { passwordsValidationSchema, updatedEmailValidationSchema } from "./OptionsSchemas";
import controller from "../../../controller";
import ShowPassword from "../../../../../Components/Show-Password-Eye/ShowPassword";

const Options = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, surname, email, password } = currentUser;
  const { handleChangeEmail, handleChangePassword } = controller();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="mr-[1.5%] mt-[1.5%] relative">
      <svg
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 cursor-pointer text-[grey] hover:text-black duration-300 hover:scale-[1.1]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <Modal
        open={isOpen}
        title={`${name.toUpperCase()} ${surname.toUpperCase()} - Options`}
        onCancel={() => setIsOpen(false)}
        footer={null}
      >
        <pre className="py-[20px] px-[10px]">
          <div className="min-h-[200px] flex flex-col justify-between items-start gap-[10px]">
            <div>
              <div className="text-[16px]">E-mail : {email}</div>
              <div className="text-[16px]">Name : {name.toUpperCase()}</div>
              <div className="text-[16px]">Surname : {surname.toUpperCase()}</div>
              <div className="text-[16px]">Password : {password}</div>
            </div>
            <Formik
              initialValues={{
                updatedEmail: "",
              }}
              validationSchema={updatedEmailValidationSchema}
              onSubmit={async (value, { resetForm }) => {
                await handleChangeEmail(value.updatedEmail, setIsOpen);
                resetForm();
              }}
            >
              {({ errors }) => (
                <Form className="w-full">
                  <label>Change E-mail</label>
                  <div className="mt-[5px] w-full flex">
                    <Field
                      placeholder="New E-mail"
                      type="email"
                      name="updatedEmail"
                      className="border border-black w-2/4 py-[3px] px-[6px] outline-none "
                    />
                    <button
                      disabled={Object.keys(errors).length !== 0}
                      type="submit"
                      className="disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed py-[4px] px-[15px] font-bold hover:scale-[1.1] duration-300 ml-[5px] bg-amber-300"
                    >
                      Update
                    </button>
                  </div>
                  <div className="text-red-500 text-sm ml-[2px] my-[7px] text-[16px]">
                    <ErrorMessage name="updatedEmail" />
                  </div>
                </Form>
              )}
            </Formik>

            <Formik
              initialValues={{
                password: "",
                repeatPassword: "",
              }}
              validationSchema={passwordsValidationSchema}
              onSubmit={async (value, { resetForm }) => {
                if (value.password === value.repeatPassword) {
                  await handleChangePassword(value.password, setIsOpen);
                  resetForm();
                }
              }}
            >
              {({ errors }) => (
                <Form className="w-full">
                  <label>Change Password</label>
                  <div className="my-[5px] w-full">
                    <Field
                      placeholder="New password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="border border-black w-2/3 py-[3px] px-[6px] outline-none"
                    />

                    <div className="text-red-500 text-sm ml-[2px] my-[7px] text-[16px]">
                      <ErrorMessage name="password" />
                    </div>
                  </div>
                  <div className="my-[5px] w-full">
                    <div className="relative w-full flex flex-col">
                      <div className="w-full mb-2">
                        <Field
                          placeholder="Repeat password"
                          type={showPassword ? "text" : "password"}
                          name="repeatPassword"
                          className="border border-black w-2/3 py-[3px] pl-[6px] pr-[35px] outline-none"
                        />
                        <ShowPassword
                          bool={showPassword}
                          fn={setShowPassword}
                          top={2}
                          right={155}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={Object.keys(errors).length !== 0}
                        className="disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed py-[4px] px-[15px] font-bold hover:scale-[1.05] duration-300 bg-amber-300"
                      >
                        Update
                      </button>
                    </div>
                    <div className="text-red-500 text-sm ml-[2px] my-[7px] text-[16px]">
                      <ErrorMessage name="repeatPassword" />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </pre>
      </Modal>
    </div>
  );
};

export default Options;
