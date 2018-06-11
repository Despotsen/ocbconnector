const rules  = require('../utilities');

const Vehicle = {
  id: rules.mandatoryCheck,
  type: rules.mandatoryCheck,
  family: rules.mandatoryCheck,
  vehiclePlateIdentifier: rules.mandatoryCheck,
  name: String,
  location: rules.locationCheck,
  refType: rules.mandatoryCheck,
  refInputs: String,
  refOutputs: String,
  owner: rules.mandatoryCheck,
  category: String,
  speed: rules.commaNumToUnits,
  cargoWeight: rules.commaNumToUnits,
  purchaseDate: String,
  mileageFromOdometer: rules.commaNumToUnits,
  vehicleConfiguration: String,
  color: String,
  features: String,
  serviceProvided: String,
  vehicleSpecialUsage: String,
  areaServed: String,
  serviceStatus: String
}

module.exports = Vehicle;