const rules = require( "../utilities" );

const TargetGroup = {
  id: rules.id,
  type: rules.test,
  name: rules.mandatoryCheck,
  acronym: rules.mandatoryCheck,
  description: rules.stringCheck
};

module.exports = TargetGroup;