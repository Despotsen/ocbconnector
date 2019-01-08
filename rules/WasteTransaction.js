const rules = require( "../utilities" );

const WasteTransaction = {
    id: rules.idCheck,
    type: rules.typeCheck,
    family: rules.stringCheck,
    refEmitter: rules.mandatoryCheck,
    refReceiver: rules.mandatoryCheck,
    refCapturer: rules.stringCheck,
    date: rules.mandatoryCheck,
    emittedResources: rules.structuredValueMandatory,
    receivedResources: rules.structuredValueMandatory,
    incorrect: rules.stringCheck,
    incorrectReason: rules.stringCheck
};

module.exports = WasteTransaction;
