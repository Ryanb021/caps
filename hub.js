'use strict';

let eventPool =  require('./eventPool');

require ('./driver/index');
require ('./vendor/index');

let Chance = require ('chance');
let chance = new Chance();

eventPool.on('pickup', payload => {
  console.log({
    event: 'pickup',
    time: new Date ().toString(),
    payload: payload,
  });
});

eventPool.on ('in-transit', payload => {
  console.log({
    event: 'in-transit',
    time: new Date ().toString,
    payload: payload,
  });
});

eventPool.on ('delivered', payload => {
  console.log ('DRIVER: delivered');
  console.log ('VENDOR: Thank you for delivering my order');
  console.log({
    event: 'delivered',
    time: new Date ().toString(),
    payload: payload,
  });
});

setInterval (() => {
  console.log('hub js initialized');
  let deliveryCompany = chance.company ();
  eventPool.emit ('VENDOR', deliveryCompany);
}, 10000);
