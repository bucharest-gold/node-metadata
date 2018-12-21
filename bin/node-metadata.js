#! /usr/bin/env node

'use strict';

process.title = 'node-metadata';

const argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .command('images', 'Indicates what images to show.')
  .example('$0 --images 8 10', 'Indicates what images to show.')
  .alias('i', 'images')
  .array('i')
  .demandOption(['i'])
  .help('h')
  .alias('h', 'help')
  .argv;

const lib = require('../lib/index.js');

if (argv.i) {
  lib.metadata().then(result => {
    const output = [];
    argv.i.forEach(a => {
      output.push(result[a]);
    });
    console.log(JSON.stringify(output));
  }).catch(console.error);
}
