const rules = require( "../utilities" );

const User = {
    id: rules.idCheck,
    type: rules.typeCheck,
    family: rules.mandatoryCheck,
    name: rules.stringCheck,
    location: rules.locationCheckNoMand,
    address: rules.stringCheck,
    refType: rules.stringCheck,
    refInputs: rules.stringCheck,
    refOutputs: rules.stringCheck,
    refAgentCollection: rules.stringCheck
}

module.exports = User;