const rules  = require('../utilities');

const VehicleType = {
  id: rules.mandatoryCheck,
  type: rules.mandatoryCheck,
  family: rules.mandatoryCheck,
  refInputs: rules.mandatoryCheck,
  refOutputs: rules.mandatoryCheck,
  name: rules.mandatoryCheck,
  description: String,
  vehicleType: rules.mandatoryCheck,
  brandName: rules.mandatoryCheck,
  numberOfAxes: rules.commaNumToUnits,
  maxCargoPerAxe: rules.commaNumToUnits,
  engineType: String,
  enginePower: String,
  tireTypes: String,
  modelName: String,
  manufacturerName: String,
  vehicleModelDate: String,
  maxCargoWeight: rules.commaNumToUnits,
  maxCargoVolume: rules.commaNumToUnits,
  fuelDepositCapacity: rules.commaNumToUnits,
  compactingRatio: rules.commaNumToUnits,
  fuelType: String,
  fuelConsumption: String,
  height: rules.commaNumToUnits,
  width: rules.commaNumToUnits,
  depth: rules.commaNumToUnits,
  weight: rules.commaNumToUnits,
  loadType: String
};

module.exports = VehicleType;