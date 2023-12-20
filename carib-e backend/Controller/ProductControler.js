/** @format */

const search = require('../models/Products');
const User = require('../models/User');
const axios = require('axios');
const { encryptData, decryptData } = require('./../Payments/payment');
const { makeHttpPostRequest } = require('./../models/Paymentmodel');
const crypto = require('crypto');
const { error } = require('console');

// const {}
const stripe = require('stripe')(
  'sk_test_51O9QrwBaRwG9G9JKA1UMTOeWlKG0HvIMbMrAS4qN8aXyqy4SN7MX3qY7hthBqKFMngrslMcOZz9fGa4jLCukvvEN00W3f9Pbbm'
);
async function productsController(req, res) {
  const keyword = req.query.keyword
  try {
   if(!keyword){
   throw Error("Invalid Keyword");
    
   }
   
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    const pageSize = parseInt(req.query.pageSize) || 10;
    console.log(keyword, "keyword");

    const data = await search.search(keyword);
    console.log('dataaaaaaa', data);
    // return;
    // Check if the data structure is as expected
    if (
      data &&
      data.info &&
      data.info.Your_Search_Report &&
      data.info.Your_Search_Report.details
    ) {
      const details = data.info.Your_Search_Report.details;
      console.log('details', details);
      const startIndex = (page - 1) * pageSize;
      const endIndex = page * pageSize;
      const paginatedDetails = details.slice(startIndex, endIndex);
    
      res.status(200).json({
        totalResults: details.length,
        totalPages: Math.ceil(details.length / pageSize),
        currentPage: page,
        pageSize: pageSize,
        results: paginatedDetails,
      });
    }
  } catch (error) {
    // Handle errors appropriately
    res.status(500).json({ error: error.message });
  }
}
function createLineItems(checkOutItems) {
  return checkOutItems.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.title,
      },
      unit_amount: item.price * 100, // Price should be in cents
    },
    quantity: item.quantity,
  }));
}
const products = async (req, res) => {
  const { checkOutItems } = req.body;

  console.log(checkOutItems);
  // return;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: createLineItems(checkOutItems), // Implement createLineItems function
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      // metadata: metadata, // Use the JSON string directly
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to create a Stripe session' });
  }
};
// controller.js
const key = crypto.randomBytes(16);
const iv = crypto.randomBytes(16);
function constructRequestJson() {
  const jsonString_2 = JSON.stringify({
    cedula: '25213842',
    nacionalidad: 'V',
    telefono: '584242565958',
    monto: '0.05',
    bank: '0104: 0104',
    Token: '12345678',
  });

  const encryptedData = encryptData(jsonString_2, key, iv);

  return {
    hs: '16576',
    dt: encryptedData,
  };
}

const sendHttpRequest = async (_, res) => {
  try {
    // const { jsonData } = req.body;
    const requestJson = constructRequestJson();
    console.log('requestJson=>>>>>>>>>>>>>>', requestJson);
    // return;
    const response = makeHttpPostRequest(requestJson);
    console.log('response==>>>>>>>>>>>>>>>>>>>>>>>>>', response);
    // const decryptedData = decryptData(response, key, iv);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json('===>>>>>>>error', error);
    // console.log(error);
  }
};

module.exports = { productsController, products, sendHttpRequest };
// function constructRequestJson(jsonData) {
//   jsonData = {
//     hs: '0278',
//     dt: {
//       branch,
//       code,
//       amount,
//     },
//   };

//   // const jsonString_1 = JSON.stringify(jsonData.hs);
//   const jsonString_2 = JSON.stringify(jsonData.dt);
//   const encryptedData = encryptData(jsonString_2);

//   return {
//     hs: '16576',
//     dt: encryptedData,
//   };
// }
