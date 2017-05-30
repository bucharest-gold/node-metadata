#! /usr/bin/env node

const program = require('commander');
const lib = require('../lib/index.js');

program
  .version(require('../package.json').version)
  .option('-i, --images', 'Indicates what images to show.')
  .parse(process.argv);

if (program.args.length === 0 || !program.images) {
  program.help();
}

if (program.images) {
  lib.metadata().then(result => {
    program.images.forEach(i => {
      console.log(result[i]);
    });
  }).catch(console.error);
}
