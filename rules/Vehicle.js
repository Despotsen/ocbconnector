const rules  = require('../utilities');

const Vehicle = {
  id: rules.id,
  type: rules.test,
  family: rules.mandatoryCheck,
  vehiclePlateIdentifier: rules.mandatoryCheck,
  name: rules.stringCheck,
  location: rules.locationCheckNoMand,
  refType: rules.mandatoryCheck,
  refInputs: rules.stringCheck,
  refOutputs: rules.stringCheck,
  owner: rules.mandatoryCheck,
  category: rules.stringCheck,
  speed: rules.commaNumToUnits,
  cargoWeight: rules.commaNumToUnits,
  purchaseDate: rules.stringCheck,
  mileageFromOdometer: rules.commaNumToUnits,
  vehicleConfiguration: rules.stringCheck,
  color: rules.stringCheck,
  features: rules.stringCheck,
  serviceProvided: rules.stringCheck,
  vehicleSpecialUsage: rules.stringCheck,
  areaServed: rules.stringCheck,
  serviceStatus: rules.stringCheck
};

module.exports = Vehicle;