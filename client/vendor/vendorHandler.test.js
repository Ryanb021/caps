'use strict';

// const eventPool = require('../eventPool');
const socket = require('../../socket');
const handler = require('./handler');
const { orderDeliver, orderGenerate } = require('./handler');

jest.mock('../../socket.js', () => {
  return {
    on: jest.fn (),
    emit: jest.fn (),
  };
});

console.log = jest.fn();

describe('Vendor Handler', () => {
  test ('event should emit', () => {
    const payload = {
      deliveryCompany: 'Arkham Delivery',
      orderId: '147258369',
      customer: 'Bruce Wayne',
      address: 'Gotham City',
    };

    handler (payload);
    expect(socket.emit).toString('in-transit', payload);
  });
});
