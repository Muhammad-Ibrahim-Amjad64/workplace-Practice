/** @format */

const crypto = require('crypto');

// function generateRandomKey() {
//   return crypto.randomBytes(16);
// }

// function generateRandomIV() {
//   return crypto.randomBytes(16);
// }

// const key = generateRandomKey();
// const iv = generateRandomIV();

// const keyHex = key.toString('hex');
// const ivHex = iv.toString('hex');

// console.log('Random Key:', keyHex);
// console.log('Random IV:', ivHex);
// const iv = crypto.randomBytes(16); // Use an appropriate size based on your algorithm (e.g., 16 bytes for AES-128-CBC)

function encryptData(data, key, iv) {
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  let encrypted = cipher.update(data, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decryptData(data) {
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  let decrypted = decipher.update(data, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
}

// Function to generate a random key (128 bits for AES-128)

module.exports = {
  encryptData,
  decryptData,
};

// const crypto = require('crypto');
// const https = require('https');
// Function to encrypt data
// function encryptData(data, key, iv) {
//   const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
//   let encrypted = cipher.update(data, 'utf-8', 'hex');
//   encrypted += cipher.final('hex');
//   return encrypted;
// }
// // Function to decrypt data
// function decryptData(data, key, iv) {
//   const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
//   let decrypted = decipher.update(data, 'hex', 'utf-8');
//   decrypted += decipher.final('utf-8');
//   return decrypted;
// }
// // Construct the JSON payload with the token
// const jsonData = {
//   hs: 'yourBankCodeHere',
//   dt: {
//     amount: '0.05',
//     nationality: 'V',
//     cedula: '25213842',
//     bank: '0104',
//     tlf: '584242565958',
//     token: '12345678', // Include the token here
//     email: 'payer@example.com', // Optional
//   },
// };
// // Convert JSON to String
// const jsonString = JSON.stringify(jsonData);
// // Encrypt the String
// const key = Buffer.from('yourKeyHere', 'utf-8');
// const iv = Buffer.from('yourVectorHere', 'utf-8');
// const encryptedData = encryptData(jsonString, key, iv);
// // Construct the final request JSON
// const requestJson = {
//   hs: 'yourBankCodeHere',
//   dt: encryptedData,
// };
// // Convert the request JSON to a string
// const requestData = JSON.stringify(requestJson);
// // Set up the HTTP request options
// const options = {
//   hostname: 'cb.venezolano.com',
//   port: 443,
//   path: '/rs/c2p', // Adjust the path based on your API endpoint
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': requestData.length,
//   },
// };
// // Make HTTP POST Request
// const req = https.request(options, (res) => {
//   let responseData = '';
//   // Accumulate the response data
//   res.on('data', (chunk) => {
//     responseData += chunk;
//   });
//   // Handle the end of the response
//   res.on('end', () => {
//     // Decrypt API Response
//     const decryptedData = decryptData(responseData, key, iv);
//     // Handle Decrypted Response
//     // ... your response handling logic here
//   });
// });
// // Handle request errors
// req.on('error', (error) => {
//   console.error('Error:', error.message);
// });
// // Send the request data
// req.write(requestData);
// // End the request
// req.end();
