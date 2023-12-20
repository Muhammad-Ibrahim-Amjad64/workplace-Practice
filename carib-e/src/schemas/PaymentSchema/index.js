// import * from "yup"
import * as yup from "yup";

const paymentSchema = yup.object({
  cardnumber: yup.string().required("Card number is required"),
  name: yup.string().required("Name on Card is required"),
  securitycode: yup.string().required("First name is required"),
  expiration: yup.string().required("Expiration is required"),
});

export default paymentSchema;
