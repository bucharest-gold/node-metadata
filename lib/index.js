/**
 * This script is responsible for grabbing the latest Node.js version
 * metadata.
 */
'use strict';

const roi = require('roi');
const semver = require('semver');
const _ = require('underscore');

// creates an object that maps a major version to the latest
// release of that version found in `json`
const findLatest = (json) => JSON.stringify(_.reduce(JSON.parse(json),
  (result, release) => {
    const version = semver.clean(release.version);
    const major = semver.major(version);
    const current = result[major] || {version: '4.0.0'}; // only > 4
    if (current && semver.gte(version, current.version)) {
      result[major] = release;
    }
    return result;
  }, {}));

const metadata = () => roi.get({ endpoint: 'https://nodejs.org/dist/index.json' })
  .then(response => findLatest(response.body))
  .catch(console.error);

module.exports = { metadata };
