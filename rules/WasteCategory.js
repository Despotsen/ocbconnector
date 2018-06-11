const rules  = require('../utilities');

const WasteCategory = {
  id: rules.mandatoryCheck,
  family: rules.mandatoryCheck,
  type: rules.mandatoryCheck,
  name: rules.mandatoryCheck,
  description: String
}

module.exports = WasteCategory;