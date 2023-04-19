'use strict';

const eventPool = require('../eventPool');
const handler = require('./handler');
jest.mock('../eventPool', () => {
  return {
    emit: jest.fn(),
  };
});

console.log = jest.fn();

describe('pick-up event', () => {
  test('event should emit', () => {
    const payload = {
      event: 'pickup',
      time: new Date(),
      payload: {
        store: 'Arkham Shipping',
        orderId: '147258369',
        customer: 'Bruce Wayne',
        address: 'Gotham City',
      },
    };

    handler(payload);
    expect(eventPool.emit).toString('in-transit', payload);
  });
});
