const rules = require( "../utilities" );

const Waste = {
    "id": rules.idCheck,
    "type": rules.typeCheck,
    "family": rules.mandatoryCheck,
    "name": rules.mandatoryCheck,
    "name:en": rules.stringCheck,
    "name:es": rules.stringCheck,
    "name:it": rules.stringCheck,
    "name:pt": rules.stringCheck,
    "name:eus": rules.stringCheck,
    "name:gr": rules.stringCheck,
    "description": rules.stringCheck,
    "description:en": rules.stringCheck,
    "description:es": rules.stringCheck,
    "description:it": rules.stringCheck,
    "description:pt": rules.stringCheck,
    "description:eus": rules.stringCheck,
    "description:gr": rules.stringCheck,
    "refCategory": rules.mandatoryCheck,
    "definitionSource": rules.stringCheck,
    "wasteCode": rules.stringCheck
};

module.exports = Waste;
