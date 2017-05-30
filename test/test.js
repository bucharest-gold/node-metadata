'use strict';

const test = require('tape');
const lib = require('../lib/index.js');

test('Should output latest metadata.', (t) => {
  t.plan(4);
  lib.metadata().then(result => {
    t.equal(result['4'].lts, 'Argon', 'Argon found.');
    t.equal(result['5'].lts, false, 'Node 5 is unnamed.');
    t.equal(result['6'].lts, 'Boron', 'Boron found.');
    t.equal(result['7'].lts, false, 'Node 7 is unnamed.');
  }).catch(e => {
    console.error(e);
    t.fail();
  });
  
});
