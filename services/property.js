const entityRules = require('../rules');

function propertyChecks(rules, entity, operation) {
  const rulesProp = Object.getOwnPropertyNames(rules);
  const entityProp = Object.getOwnPropertyNames(entity);

  const rulesPropLowCase = rulesProp
    .map(rule => rule.toLocaleLowerCase());
  const entityPropLowCase = entityProp
    .map(element => element.toLocaleLowerCase());

  const invalidProp = [];
  const rulesetLowCase = {};

  if (!operation || operation === 'CREATE') {
    if (Object.keys(rulesProp).length !== Object.keys(entityProp).length) {
      throw new Error('Rules headers and entity headers are not same.');
    }
  }

  rulesPropLowCase.forEach((property) => {
    rulesetLowCase[property] = true;
  });

  entityPropLowCase.forEach((property) => {
    if (!rulesetLowCase[property]) {
      invalidProp.push(property);
    }
  });

  if (invalidProp.length !== 0) {
    throw new Error(`Invalid properties found in csv header:${invalidProp}`);
  }
}

function rulesCheck(parsedData) {
  const { type } = parsedData[0];
  const rules = entityRules[type];
  const errors = [];

  if (!type) {
    return new Error(`Failed to find type on ${parsedData[0].id}`);
  }
  parsedData.forEach((element) => {
    if (!element.type || element.type !== type) {
      errors.push(element.id);
    }
  });

  if (errors.length !== 0) { throw new Error(`Invalid type attribute on: ${errors}`); }

  if (!rules) { throw new Error(`No rules have been found for: ${type}`); }

  return rules;
}

module.exports = {
  propertyChecks,
  rulesCheck
};
