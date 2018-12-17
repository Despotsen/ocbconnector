const rules = require("../utilities");

const Route = {
  id: rules.idCheck,
  type: rules.typeCheck,
  shortName: rules.stringCheck,
  longName: rules.stringCheck,
  description: rules.stringCheck,
  refScheduledVehicle: rules.stringCheck,
  refAssignedVehicle: rules.mandatoryCheck,
  vehicleType: rules.stringCheck,
  departurePoint: rules.locationCheckNoMand,
  scheduledDepartureTimestamp: rules.stringCheck,
  realDepartureTimestamp: rules.stringCheck,
  arrivalPoint: rules.locationCheckNoMand,
  scheduledArrivalTimestamp: rules.stringCheck,
  realArrivalTimestamp: rules.stringCheck,
  scheduledStops: rules.structuredValue,
  realStops: rules.structuredValueMandatory,
  scheduledPath: rules.structuredValue,
  realPath: rules.structuredValue
};

module.exports = Route;
