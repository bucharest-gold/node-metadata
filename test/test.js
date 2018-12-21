'use strict';

/* eslint-env jest */

const lib = require('../lib/index.js');

test('Should parse the result correctly.', () => {
  expect.assertions(1);
  return lib.metadata().then(result => {
    expect(result['6'].lts).toBe('Boron');
  }).catch(e => {
    console.error(e);
  });
});

test('Should output latest metadata.', () => {
  expect.assertions(5);
  return lib.metadata().then(result => {
    expect(result['6'].lts).toBe('Boron');
    expect(result['7'].lts).toBe(false);
    expect(result['8'].lts).toBe('Carbon');
    expect(result['10'].lts).toBe('Dubnium');
    expect(result['11'].lts).toBe(false);
  }).catch(e => {
    console.error(e);
  });
});
