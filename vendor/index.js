'use strict';

// const eventPool = require('../eventPool');
const handler = require('./handler');
const {io} = require('socket.io-client');
const socket = io.connect ('http://localhost:3003/caps');

socket.on('VENDOR', (deliveryCompany) => {
  setTimeout(() => {
    handler(deliveryCompany);
  }, 1000);
});

// eventPool.on('VENDOR', (deliveryCompany) => {
//   setTimeout(() => {
//     handler(deliveryCompany);
//   }, 5000);
// });
