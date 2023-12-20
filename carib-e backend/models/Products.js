/** @format */

// /** @format */

const axios = require('axios');
// const {decryptData,encryptData}= require("./../Payments/payment")

async function search(keyword) {
  console.log(keyword, 'test');
  try {
    const response = await axios.get(
      // `https://ldapi.latinconex.com/amazon_api/Amazon_Get_Details_Via_Api.php?search_keyword=${keyword}`
      `https://ldapi.latinconex.com/amazon_api_new/Normal_Amazon_Get_Details_Via_Api.php?search_keyword=${keyword}`
    );
    console.log('response', response.data.info);
    return response.data;
  } catch (error) {
    console.error('API request error: ', error);
    throw error;
  }
}

// // ==========================//

// const _cTwop = async (req, res) => {

// const Json

//   const {}=re

// const encryptedData = encryptData();

// try {

//     post('https://cb.venezolano.com/rs/c2p', encryptedData)
//     // .then((response) => {
//       // Decrypt API Response

//     //   const decryptedData = decryptData(
//     //     response.data.dt,
//     //     'yourKeyHere',
//     //     'yourVectorHere'
//     //   );

//     //   // Handle Decrypted Response
//     //   // ... your response handling logic here
//     // })
//     // .catch((error) => {
//     //   // Handle errors
//     //   console.error('Error:', error.response.data);
//     // });
// } catch (error) {

// }

// }

module.exports = {
  search,
};
