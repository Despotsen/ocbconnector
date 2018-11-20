const rules = require("../utilities");

const Route = {
  id: rules.id,
  type: rules.test,
  shortName: rules.mandatoryCheck,
  longName: rules.stringCheck,
  refAssignedVehicle: rules.stringCheck,
  vehicleType: rules.mandatoryCheck,
  departurePoint: rules.locationCheckNoMand,
  arrivalPoint: rules.locationCheckNoMand,
  stops: rules.stringToArrayMandatory,
  refAgency: rules.stringCheck,
};

module.exports = Route;
