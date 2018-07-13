const rules  = require('../utilities');

const Waste = {
  id: rules.id,
  family: rules.mandatoryCheck,
  type: rules.test,
  name: rules.mandatoryCheck,
  description: rules.stringCheck,
  refCategory: rules.mandatoryCheck,
  definitionSource: rules.stringCheck,
  wasteCode: rules.stringCheck
};

module.exports = Waste;