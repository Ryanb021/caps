'use strict';

const eventPool = require('../eventPool');
const handler = require('./handler');

eventPool.on('VENDOR', (deliveryCompany) => {
  setTimeout(() => {
    handler(deliveryCompany);
  }, 5000);
});
