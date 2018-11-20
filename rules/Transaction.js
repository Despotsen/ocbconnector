const rules = require( "../utilities" );

const Transaction = {
    id: rules.id,
    type: rules.test,
    refEmitter: rules.mandatoryCheck,
    refReceiver: rules.mandatoryCheck,
    refCapturer: rules.stringCheck,
    date: rules.mandatoryCheck,
    refTransferredResources: rules.mandatoryCheck,
    transferredLoad: rules.commaNumToUnitsMandatory,
};

module.exports = Transaction;
