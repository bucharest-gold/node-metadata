/**
 * This script is responsible for grabbing the latest Node.js version
 * metadata.
 */
'use strict';

const axios = require('axios');
const semver = require('semver');

// creates an object that maps a major version to the latest
// release of that version found in `json`
const findLatest = (json) => json.reduce(
  (result, release) => {
    const version = semver.clean(release.version);
    const major = semver.major(version);
    const current = result[major] || { version: '6.0.0' }; // only > 6
    if (current && semver.gte(version, current.version)) {
      result[major] = release;
    }
    return result;
  }, {});

const metadata = () => axios.get('https://nodejs.org/dist/index.json')
  .then(response => {
    return findLatest(response.data);
  })
  .catch(console.error);

module.exports = { metadata };
