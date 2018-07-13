const rules  = require('../utilities');

const SortingType = {
  id: rules.mandatoryCheck,
  family: rules.mandatoryCheck,
  type: rules.mandatoryCheck,
  name: rules.mandatoryCheck,
  nameLocal: String,
  description: String,
  descriptionLocal: String,
  regulation: String,
  refResources: rules.stringToArrayMandatory,
  shape: String,
  color: rules.mandatoryCheck,
  annotations: String,
  areaServed: String
}

module.exports = SortingType;
