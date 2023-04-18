'use strict';

const eventPool = require('../eventPool');
const handler = require('./handler');

eventPool.on('pickup', (payload) => {
  console.log('DRIVER : Order has been picked up');
  setTimeout(() => {
    handler(payload);
  }, 5000);
});
