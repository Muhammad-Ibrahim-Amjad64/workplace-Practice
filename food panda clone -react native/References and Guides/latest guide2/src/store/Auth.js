import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Api} from '../Utlies/constant/Api';

export const sterngymAuthAPIS = createApi({
  reducerPath: 'sterngymtrainerAuthAPIS',
  baseQuery: fetchBaseQuery({
    baseUrl: Api,
    prepareHeaders: headers => {
      headers.set('Accept', 'application/json');

      // ACCESS TOKEN FORMET
      // prepareHeaders: (headers, {getState}) => {
      //   headers.set('Accept', 'application/json');
      // const token = getState().userslice.accestoken;
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`);
      //   console.log('authorization', `Bearer ${token}`);
      // }
      return headers;
    },
    // credentials: 'include',
  }),

  endpoints: build => ({
    SignupTrainer: build.mutation({
      query(body) {
        return {
          method: 'POST',
          url: `auth/signup`,
          body,
        };
      },
    }),
    loginUser: build.mutation({
      query(body) {
        return {
          method: 'POST',
          url: `auth/login`,
          body,
        };
      },
    }),
    Signuptrainee: build.mutation({
      query(body) {
        return {
          method: 'POST',
          url: `auth/signup`,
          body,
        };
      },
    }),
    forgetpassword: build.mutation({
      query(body) {
        return {
          method: 'POST',
          url: `auth/forgot-password`,
          body,
        };
      },
    }),
    Otp: build.mutation({
      query(otp) {
        return {
          method: 'POST',
          url: `auth/verify-otp/${otp}`,
        };
      },
    }),
    Resetpassword: build.mutation({
      query(body) {
        return {
          method: 'PATCH',
          url: `auth/reset-password`,
          body,
        };
      },
    }),
  }),
});

export const {
  useSignupTrainerMutation,
  useLoginUserMutation,
  useSignuptraineeMutation,
  useForgetpasswordMutation,
  useOtpMutation,
  useResetpasswordMutation,
} = sterngymAuthAPIS;
