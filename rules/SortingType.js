const rules = require( "../utilities" );

const SortingType = {
    id: rules.id,
    family: rules.mandatoryCheck,
    type: rules.test,
    name: rules.mandatoryCheck,
    nameLocal: rules.stringCheck,
    description: rules.stringCheck,
    descriptionLocal: rules.stringCheck,
    regulation: rules.stringCheck,
    refResources: rules.stringToArrayMandatory,
    shape: rules.stringCheck,
    color: rules.mandatoryCheck,
    annotations: rules.stringCheck,
    wasteCharacterization: rules.stringCheck,
    areaServed: rules.stringCheck,
};

module.exports = SortingType;
