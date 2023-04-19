'use strict';

// const eventPool = require('../eventPool');
const {io} = require('socket.io-client');
const socket = io.connect ('http://localhost:3003/caps');

let Chance = require('chance');
let chance = new Chance();

module.exports = (deliveryCompany) => {

  const payload = {
    deliveryCompany: deliveryCompany,
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };

  console.log('VENDOR: Thank you for delivering my order');
  socket.emit('pickup', payload);
};
