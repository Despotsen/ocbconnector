const rules  = require('../utilities');

const DepositPoint = {
  id: rules.id,
  type: rules.test,
  family: rules.mandatoryCheck,
  serialNumber: rules.stringCheck,
  refSortingType: rules.mandatoryCheck,
  description: rules.stringCheck,
  refType: rules.mandatoryCheck,
  storedWasteOrigin: rules.stringCheck,
  location: rules.locationCheck,
  address: rules.stringCheck,
  fillingLevel: rules.commaNumToUnits,
  cargoWeight: rules.commaNumToUnits,
  temperature: rules.commaNumToUnits,
  methaneConcentration: rules.commaNumToUnits,
  regulation: rules.stringCheck,
  responsible: rules.stringCheck,
  owner: rules.stringCheck,
  dateServiceStarted: rules.stringCheck,
  dateLastEmptying: rules.stringCheck,
  nextActuationDeadline: rules.stringCheck,
  actuationHours: rules.stringCheck,
  openingHours: rules.stringCheck,
  dateLastCleaning: rules.stringCheck,
  nextCleaningDeadline: rules.stringCheck,
  refDepositPointIsle: rules.stringCheck,
  status: rules.mandatoryCheck,
  color: rules.stringCheck,
  image: rules.stringCheck,
  annotations: rules.stringCheck,
  areaServed: rules.stringCheck,
  dateModified: rules.stringCheck,
  refDevice: rules.stringCheck
};

module.exports = DepositPoint;