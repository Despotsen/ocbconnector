const rules  = require('../utilities');

const DepoistPointType = {
  id: rules.mandatoryCheck,
  type: rules.mandatoryCheck,
  family: rules.mandatoryCheck,
  name: rules.mandatoryCheck,
  refInputs: String,
  refOutputs: String,
  width: rules.commaNumToUnitsMandatory,
  height: rules.commaNumToUnitsMandatory,
  depth: rules.commaNumToUnitsMandatory,
  weight: rules.commaNumToUnitsMandatory,
  cargoVolume: rules.commaNumToUnitsMandatory,
  maximumLoad: rules.commaNumToUnitsMandatory,
  recommendedLoad: rules.commaNumToUnitsMandatory,
  category: rules.mandatoryCheck,
  insertHolesNumber: rules.commaNumToUnitsMandatory,
  insertHoleWidth: rules.commaNumToUnits,
  insertHoleHeight: rules.commaNumToUnits,
  loadType: String,
  madeOf: String,
  madeOfCode: String,
  brandName: String,
  modelName: String,
  manufacturerName: String,
  colors: rules.stringToArray,
  image: String,
  compliantWith:  rules.stringToArray,
  accessLimitation: String,
  userIdentification: String,
  inputControl: String,
  maximumInputVolume: rules.commaNumToUnits,
  features: rules.stringToArrayMandatory
}

module.exports = DepoistPointType;