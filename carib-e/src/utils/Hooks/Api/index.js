import axios from "axios";

export const fethchProducts = () => {
  try {
    const response = axios.get(`${process.env.BackendURL}/products`);
    console.log(response);

    // if (res.data.length === 0) {
    //   return false;
    // } else {
    //   return res.data;
    // }
  } catch (e) {
    console.log(e);
  }
};
