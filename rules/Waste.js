const rules  = require('../utilities');

const Waste = {
  id: rules.mandatoryCheck,
  family: rules.mandatoryCheck,
  type: rules.mandatoryCheck,
  name: rules.mandatoryCheck,
  description: String,
  refCategory: rules.mandatoryCheck,
  definitionSource: String,
  wasteCode: String
}

module.exports = Waste;