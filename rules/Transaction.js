const rules  = require('../utilities');

const Transaction =  {
  id: rules.mandatoryCheck,
  type: rules.mandatoryCheck,
  refEmitter: rules.mandatoryCheck,
  refReceiver: rules.mandatoryCheck,
  refCapturer: String,
  date: rules.mandatoryCheck,
  refTransferredResources: rules.mandatoryCheck,
  transferredLoad: rules.commaNumToUnitsMandatory
}

module.exports = Transaction;