const csv = require('csvtojson');
const ruleChecks = require('../services/property').rulesCheck;
const propertyChecks = require('./property').propertyChecks;
const processEntity = require('./property').processEntity;

function parse(rawData, option) {
  return parseOperations.getData(rawData)
    .then((parsedData) => {
      return parseOperations.getRules(parsedData)
        .then((rules) => {
          return parseOperations.getEntity(rules, parsedData, option)
            .then((checkedData) => {
              return Promise.resolve(checkedData);
            });
        });
    })
    .catch((error) => Promise.reject(error));
}

const parseOperations = {

  getData: (rawData) => csv({delimiter: ';'}).fromString(rawData),

  getRules: (parsedData) => {
    let rules;
    try {
      rules = ruleChecks(parsedData);
    } catch (error) {
      return Promise.reject(error.message);
    }
    return Promise.resolve(rules);
  },

  getEntity: (rules, parsedData, option) => {
    const result = [];
    const errors = [];

    parsedData.forEach((entity) => {
     try {
      result.push(processEntity(rules, entity));
     } catch (error) {
       errors.push(error.message);
     }
    });
    return Promise.resolve({errors, result});
  },
};

module.exports = {
  parse,
};
