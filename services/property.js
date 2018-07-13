const entityRules = require('../rules');
const metawrite = require('./metadata').set;

function propertyChecks(rules, entity, operation) {
  const rulesProp = Object.getOwnPropertyNames(rules);
  const entityProp = Object.getOwnPropertyNames(entity);

  const entityPropClean = function(value) {
    let counter = 0;
    let clear = value;
    let result = [];
    let metadata = [];

    clear.forEach(element => {
      if(!element.includes("%")){
        counter += 1;
        result.push(element);
      } else {
        counter += 1;
        let attr = element.substring(0, element.indexOf("%"));
          result.push(attr);
        let data = element.substring(element.indexOf("%") + 2, element.length-2);
        let obj = {};
        obj['name'] = data.substring(data.indexOf("{"));
        obj['value'] = entity[element];
        obj['test'] = counter;
        metadata.push(obj);
      }
    });
    metawrite(metadata);
    counter = 0;
    return result;
  };

  const test = entityPropClean(entityProp);

  const rulesPropLowCase = rulesProp
    .map((rule) => rule.toLocaleLowerCase());
  const entityPropLowCase = test
    .map((element) => element.toLocaleLowerCase());

  const invalidProp = [];
  const rulesetLowCase = {};

  if (!operation || operation === 'CREATE') {
    if (Object.keys(rulesProp).length !== Object.keys(test).length) {
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
  const {type} = parsedData[0];
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

  if (errors.length !== 0) {
    throw new Error(`Invalid type attribute on: ${errors}`);
  }

  if (!rules) {
    throw new Error(`No rules have been found for: ${type}`);
  }

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
      if (option !== 'update') {
        throw new Error(`Property ${property} failed attribute check in ${entity.id}`);
      } else if (error.message !== '100') {
        throw new Error(`Property ${property} failed attribute check in ${entity.id}`);
      }
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
    throw new Error(`Rules ${property} rule was not of supported type.`);
  }
  return convertProperties(rule, entity);
}

function convertProperties(array, entity) {
  let arrayDuplicate = array.slice();
  let rule = arrayDuplicate.pop();
  let mappingFunction;

      mappingFunction = function caseInsensitivePropertyMapping(property) {
          let caseInsensitiveProperty = findProperty(entity, property);
          if (caseInsensitiveProperty !== undefined) {
              return entity[caseInsensitiveProperty];
          }
          throw new Error(`100`);
      };

  let args = arrayDuplicate.map(mappingFunction);
  let result = rule(...args);
  if (result === null || result === undefined) {
      throw new Error(`${mappingFunction} returned null or undefined`);
  }
  return result;
}

function findProperty(target, property) {
  let targetProperties = Object.getOwnPropertyNames(target);
  let viableProperties = targetProperties.filter((targetProperty) => {
      if (targetProperty.includes("%")) {
        let cleanTargetProperty = targetProperty.substring(0, targetProperty.indexOf("%"));

        return (property.toLowerCase() === cleanTargetProperty.toLowerCase());
      }
      return (property.toLowerCase() === targetProperty.toLowerCase());
  });
  return viableProperties[0];
}

module.exports = {
    rulesCheck,
    processEntity,
};
