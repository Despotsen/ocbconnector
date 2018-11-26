const rules = require( "../utilities" );

const Waste = {
    id: rules.idCheck,
    family: rules.mandatoryCheck,
    type: rules.typeCheck,
    name: rules.mandatoryCheck,
    description: rules.stringCheck,
    refCategory: rules.mandatoryCheck,
    definitionSource: rules.stringCheck,
    wasteCode: rules.stringCheck,
};

module.exports = Waste;
