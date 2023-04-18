'use strict';

const eventPool = require('../eventPool');

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
  eventPool.emit('pickup', payload);
};
