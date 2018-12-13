'use strict';

/* eslint-env jest */

const lib = require('../lib/index.js');

test('Should parse the result correctly.', () => {
  expect.assertions(1);
  return lib.metadata().then(result => {
    expect(JSON.parse(result)['4'].lts).toBe('Argon');
  }).catch(e => {
    console.error(e);
  });
});

test('Should output latest metadata.', () => {
  expect.assertions(4);
  return lib.metadata().then(result => {
    const jsonObject = JSON.parse(result);
    expect(jsonObject['4'].lts).toBe('Argon');
    expect(jsonObject['5'].lts).toBe(false);
    expect(jsonObject['6'].lts).toBe('Boron');
    expect(jsonObject['7'].lts).toBe(false);
  }).catch(e => {
    console.error(e);
  });
});
