import * as Yup from "yup";

export const passwordsValidationSchema = Yup.object({
  password: Yup.string()
    .required("Required")
    .min(8, "Minimum 8 characters")
    .matches(/^(?=.*[A-Z])/, "Required 1 capital letter")
    .matches(/^(?=.*[0-9])/, "Required 1 number")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "Required 1 symbol")
    .max(20, "Maximum 20 characters"),
  repeatPassword: Yup.string()
    .required("Required")
    .min(8, "Minimum 8 characters")
    .matches(/^(?=.*[A-Z])/, "Required 1 capital letter")
    .matches(/^(?=.*[0-9])/, "Required 1 number")
    .matches(/^(?=.*[!@#\$%\^&\*])/, "Required 1 symbol")
    .max(20, "Maximum 20 characters"),
});

export const updatedEmailValidationSchema = Yup.object({
  updatedEmail: Yup.string().email("E-mail is wrong").required("E-mail is required"),
});
