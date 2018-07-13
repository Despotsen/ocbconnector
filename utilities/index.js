const mandatoryCheck = require('./rules').mandatoryCheck;
const locationCheck = require('./rules').locationCheck;
const commaNumToUnits = require('./rules').commaNumToUnits;
const stringToArray = require('./rules').stringToArray;
const dateCheck = require('./rules').dateCheck;
const extraCheck = require('./rules').extraCheck;
const maxCargoVolume = require('./rules').maxCargoVolume;
const stringToArrayMandatory = require('./rules').stringToArrayMandatory;
const commaNumToUnitsMandatory = require('./rules').commaNumToUnitsMandatory;
const removeForbiden = require('./rules').removeForbiden;
const removeForbidenStrict = require('./rules').removeForbidenStrict;
const locationCheckNoMand = require('./rules').locationCheckNoMand;
const stringCheck = require('./rules').idTypeCheck;
const test = require('./rules').testCheck;
const id = require('./rules').idspec;

module.exports = {
  mandatoryCheck,
  locationCheck,
  commaNumToUnits,
  stringToArray,
  dateCheck,
  dateCheck,
  extraCheck,
  maxCargoVolume,
  stringToArrayMandatory,
  commaNumToUnitsMandatory,
  removeForbiden,
  removeForbidenStrict,
  locationCheckNoMand,
    stringCheck,
    test,
    id
};