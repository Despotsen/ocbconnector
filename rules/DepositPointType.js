const rules  = require('../utilities');

const DepoistPointType = {
  id: rules.id,
  type: rules.test,
  family: rules.mandatoryCheck,
  name: rules.mandatoryCheck,
  refInputs: rules.stringCheck,
  refOutputs: rules.stringCheck,
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
  loadType: rules.stringCheck,
  madeOf: rules.stringCheck,
  madeOfCode: rules.stringCheck,
  brandName: rules.stringCheck,
  modelName: rules.stringCheck,
  manufacturerName: rules.stringCheck,
  colors: rules.stringToArray,
  image: rules.stringCheck,
  compliantWith:  rules.stringToArray,
  accessLimitation: rules.stringCheck,
  userIdentification: rules.stringCheck,
  inputControl: rules.stringCheck,
  maximumInputVolume: rules.commaNumToUnits,
  features: rules.stringToArrayMandatory
};

module.exports = DepoistPointType;