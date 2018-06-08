
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

module.exports = {
  propertyChecks
};
