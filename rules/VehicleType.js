const rules = require( "../utilities" );

const VehicleType = {
    id: rules.idCheck,
    type: rules.typeCheck,
    family: rules.mandatoryCheck,
    refInputs: rules.stringCheck,
    refOutputs: rules.stringCheck,
    name: rules.mandatoryCheck,
    description: rules.stringCheck,
    vehicleType: rules.mandatoryCheck,
    brandName: rules.mandatoryCheck,
    numberOfAxes: rules.commaNumToUnits,
    maxCargoPerAxe: rules.stringToArrayNum,
    engineType: rules.stringCheck,
    enginePower: rules.stringCheck,
    tireTypes: rules.stringCheck,
    modelName: rules.stringCheck,
    manufacturerName: rules.stringCheck,
    vehicleModelDate: rules.stringCheck,
    maxCargoWeight: rules.commaNumToUnits,
    maxCargoVolume: rules.commaNumToUnits,
    fuelDepositCapacity: rules.commaNumToUnits,
    compactingRatio: rules.commaNumToUnits,
    fuelType: rules.stringCheck,
    fuelConsumption: rules.stringCheck,
    height: rules.commaNumToUnits,
    width: rules.commaNumToUnits,
    depth: rules.commaNumToUnits,
    weight: rules.commaNumToUnits,
    loadType: rules.stringCheck,
};

module.exports = VehicleType;
