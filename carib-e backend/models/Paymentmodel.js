/** @format */
const axios = require('axios');
// const { encryptData, decryptData } = require('./../Payments/payment');

async function makeHttpPostRequest(requestJson) {
  console.log('requestJson', requestJson);
  try {
    const response = await axios.post(
      'https://api.caribe.solutions/c2p',
      requestJson,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('responseApi', response);
    return response;
  } catch (error) {
    console.log('errorApi', error);
  }
}
module.exports = { makeHttpPostRequest };
