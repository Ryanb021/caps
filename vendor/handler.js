'use strict';

const eventPool = require('../eventPool');

let Caps = require('caps');
let caps = new Caps();

module.exports = (deliveryCompany) => {

  const payload = {
    deliveryCompany: deliveryCompany,
    orderId: caps.guid(),
    customer: caps.name(),
    address: caps.address(),
  };

  console.log('VENDOR: Thank you for delivering my order');
  eventPool.emit('pickup', payload);
};
