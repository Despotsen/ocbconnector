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

function processEntity(rules, entity, option) {
  propertyChecks(rules, entity, option);
  const rulesProperties = Object.keys(rules);
  const result = {};

  rulesProperties.forEach((property) => {
    try {
      result[property] = processEntityProperty(rules, entity, property);
    } catch (error) {
      throw new Error(`Property ${property} failed attribute check in ${entity.id}`);
    }
  });

  return result;
}

function processEntityProperty(rules, entity, property) {
  let rule;
  if (typeof rules[property] === 'function') {
    rule = [property, rules[property]];
  } else if (rules[property] instanceof Array) {
    rule = rules[property];
  } else {
    throw new Error(`Rules ${property} rule was not of supported type.`)
  }
  return convertProperties(rule, entity);
}

function convertProperties(ruleArray, entity) {
  const arrayDuplicate = ruleArray.slice();
  const rule = arrayDuplicate.pop();

  const mapping = property => entity[findProperty(entity, property)];

  const args = arrayDuplicate.map(mapping);
  
  const result = rule(...args);

  if (result === null || result === undefined) {
    throw new Error(`${mapping} return null or undefined`);
  }
  if (result !== 'undefined')
    return result;
}

function findProperty(target, property) {
  const targetProperty = Object.keys(target);
  const approvedProperties = targetProperty
    .filter(targetProperty => {
      return property.toLowerCase() === targetProperty.toLowerCase()
    });
  return approvedProperties[0];
}

module.exports = {
  rulesCheck,
  processEntity
};
