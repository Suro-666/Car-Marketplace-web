import * as Yup from "yup";

export const registerSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string().email("E-mail is wrong").required("E-mail is required"),
    password: Yup.string()
        .required("Password is required")
        .min(8, "Minimum 8 characters")
        .matches(/^(?=.*[A-Z])/, "Required 1 capital letter")
        .matches(/^(?=.*[0-9])/, "Required 1 number")
        .matches(/^(?=.*[!@#\$%\^&\*])/, "Required 1 symbol")
        .max(20, "Maximum 20 characters"),
});
