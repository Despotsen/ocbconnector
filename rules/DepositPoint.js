const rules  = require('../utilities');

const DepositPoint = {
  id: rules.mandatoryCheck,
  type: rules.mandatoryCheck,
  family: rules.mandatoryCheck,
  serialNumber: String,
  refSortingType: rules.mandatoryCheck,
  description: String,
  refType: rules.mandatoryCheck,
  storedWasteOrigin: String,
  location: rules.locationCheck,
  address: String,
  fillingLevel: rules.commaNumToUnits,
  cargoWeight: rules.commaNumToUnits,
  temperature: rules.commaNumToUnits,
  methaneConcentration: rules.commaNumToUnits,
  regulation: String,
  responsible: String,
  owner: String,
  dateServiceStarted: String,
  dateLastEmptying: String,
  nextActuationDeadline: String,
  actuationHours: String,
  openingHours: String,
  dateLastCleaning: String,
  nextCleaningDeadline: String,
  refDepositPointIsle: String,
  status: rules.commaNumToUnitsMandatory,
  color: String,
  image: String,
  annotations: String,
  areaServed: String,
  dateModified: String,
  refDevice: String
};

module.exports = DepositPoint;