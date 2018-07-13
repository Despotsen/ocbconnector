const rules  = require('../utilities');

const WasteCategory = {
  id: rules.id,
  family: rules.mandatoryCheck,
  type: rules.test,
  name: rules.mandatoryCheck,
  description: rules.stringCheck
};

module.exports = WasteCategory;
