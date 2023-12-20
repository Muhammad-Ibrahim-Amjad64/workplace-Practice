/** @format */

import axios from "axios";

import React from "react";
const BackendUrl = "http://localhost:5000/api/v2/auth";

const UsecreateApi = () => {
  const UsePostAuthData = async (endpoint, body) => {
    try {
      const response = await axios.post(`${BackendUrl}/${endpoint}`, body);
      console.log("response", response, endpoint, body);

      return response;
    } catch (error) {
      console.log(error, "eror");
      return error;
    }
  };

  const UsePatchPrams = async (endpoint, params, body) => {
    console.log(endpoint, params, body);
    try {
      const resPatch = await axios.patch(
        `${BackendUrl}/${endpoint}/${params}`,
        body
      );
      console.log("resPatch", resPatch);

      return resPatch;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  const getData = async (body) => {
    console.log("body", body);

    try {
      const response = await axios.get(
        "http://localhost:5000/api/v2/products",

        {
          params: body,
          headers: {
            "Content-Type": "application/json",
            // Authorization: "",
          },
        }
      );

      console.log("getdataHook", response.data);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return { UsePostAuthData, UsePatchPrams, getData };
};
export default UsecreateApi;
