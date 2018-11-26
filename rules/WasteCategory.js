const rules = require( "../utilities" );

const WasteCategory = {
    id: rules.idCheck,
    family: rules.mandatoryCheck,
    type: rules.typeCheck,
    name: rules.mandatoryCheck,
    description: rules.stringCheck,
};

module.exports = WasteCategory;
