/** @format */

import * as yup from 'yup';

export const resetSchema = yup.object({
  resetPasswordVerificationCode: yup
    .string()
    .required('Please Enter your verification code'),
  password: yup.string().required('Please Enter your new password'),
});
