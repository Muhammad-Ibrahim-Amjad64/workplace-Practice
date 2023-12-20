import * as yup from "yup";

export const signupSchema = yup.object({
  firstname: yup.string().required("Please enter your firstname"),
  lastname: yup.string().required("Please enter your lastname"),
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().required("Please enter your  password"),
});
