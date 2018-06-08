const utils = require('../utilities/utils.json');
const path = require('path');

function codeChecker(code) {
  if (!code) {
    return utils['500'];
  }
  return utils[code];
}

function fileCheck(file, cb) {
  const allowedExt = utils.ext;

  if (!file) {
    return cb('400');
  }

  if (!allowedExt.includes(path.extname(file.originalname))) {
    return cb('400');
  }

  return cb(null, true);
}

function headerCheck(headers, cb) {
  if (headers['fiware-service'] === undefined) {
    return cb('428');
  }

  if (headers['fiware-servicepath'] === undefined) {
    return cb('428');
  }

  return cb(null, true);
}

module.exports = {
  codeChecker,
  fileCheck,
  headerCheck
};
