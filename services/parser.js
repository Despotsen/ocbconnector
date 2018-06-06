const csv=require('csvtojson');
const entityRules = require('../rules');

function parse(rawData) {
  return parseOperations.getData(rawData).then((parsedData) => {
    return parseOperations.getRules(parsedData).then((rules) => {
      return parseOperations.checkAttributes(rules,parsedData).then((attr) => {
        return Promise.resolve(attr)
      });
    });
  })
  .catch((error) => {
    return Promise.reject(error);
  })
}

const parseOperations = {

  getData: (rawData) => {
    return csv({delimiter: ';'}).fromString(rawData);
  },

  getRules: (parsedData) => {
    const type = parsedData[0].type;
    const rules = entityRules[type];
    const errors = [];

    if(!type) {
      return Promise.reject('Failed to find type on ' + parsedData[0].id);
    } else {
      parsedData.forEach(element => {
        if(!element.type || element.type !== type) {
          errors.push(element.id);
        }
      });
    }

    if(errors.length != 0)
      return Promise.reject('Invalid type attribute on: ' + errors);

    if(!rules)
      return Promise.reject('No rules have been found for: ' + type);

    return Promise.resolve(rules);
  },

  checkAttributes: (rules, parsedData, options) => {
    const result = {};
    const properties = Object.getOwnPropertyNames(rules);
    
    return Promise.resolve(properties);
  }
}

module.exports = {
  parse
}