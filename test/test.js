'use strict';

const test = require('tape');
const lib = require('../lib/index.js');

test('Should parse the result correctly.', (t) => {
  t.plan(1);
  lib.metadata().then(result => {
    t.equal(JSON.parse(result)['4'].lts, 'Argon', 'Successfully parsed, Argon found.');
  }).catch(e => {
    console.error(e);
    t.fail();
  });
});

test('Should output latest metadata.', (t) => {
  t.plan(4);
  lib.metadata().then(result => {
    const jsonObject = JSON.parse(result);
    t.equal(jsonObject['4'].lts, 'Argon', 'Argon found.');
    t.equal(jsonObject['5'].lts, false, 'Node 5 is unnamed.');
    t.equal(jsonObject['6'].lts, 'Boron', 'Boron found.');
    t.equal(jsonObject['7'].lts, false, 'Node 7 is unnamed.');
  }).catch(e => {
    console.error(e);
    t.fail();
  });
});

