const rules  = require('../utilities');

const SortingType = {
  id: rules.mandatoryCheck,
  family: rules.mandatoryCheck,
  type: rules.mandatoryCheck,
  name: rules.mandatoryCheck,
  description: String,
  regulation: String,
  refResources: rules.stringToArrayMandatory,
  color: rules.mandatoryCheck,
  annotations: String,
  areaServed: String
}

module.exports = SortingType;