const rules  = require('../utilities');

const DepositPointIsle = {
  id: rules.mandatoryCheck,
  type: rules.mandatoryCheck,
  location: rules.locationCheckNoMand,
  address: String,
  name: String,
  description: String,
  features: rules.mandatoryCheck,
  refDepositPoint: String,
  areaServed: String,
  dateModified: String,
  dateCreated: String
}

module.exports = DepositPointIsle;