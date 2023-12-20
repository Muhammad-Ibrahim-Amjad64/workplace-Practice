import * as yup from "yup";

export const forgetSchema = yup.object({
  email: yup.string().email().required("Please Enter your Email"),
});
