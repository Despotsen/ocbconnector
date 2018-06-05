const entities = require('./entities');
const fileCheck = require('./checks').fileCheck;
const codeCheck = require('./checks').codeChecker;
const headersCheck = require('./checks').headerCheck;

module.exports = {
  entities,
  fileCheck,
  codeCheck,
  headersCheck
};
