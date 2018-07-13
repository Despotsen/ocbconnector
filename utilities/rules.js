const response = require('../utilities/response');
const data = require('../services/metadata').get;
const pos = require('../services/metadata').getIgor;
const moment = require('moment');
let counter = 0;


function commaNumToUnits(oldNum) {
    counter += 1;
  const newNum = oldNum ? Number(oldNum.replace('.', '').replace(',', '.')) : 0;
    let obj = [];
    if(pos(counter)) {
        obj = [];
        meta = pos(counter);
        let send =  {
            value: newNum || 0,
            type: "Integer",
            metadata: JSON.parse(meta)
        };
        obj.push(send);

    }

    if(obj.length !== 0) {
        return obj[0];
    }

          return {
              "value": newNum || 0,
              "type": "Integer"
          };
}

function commaNumToUnitsMandatory(oldNum) {
    counter += 1;
    if(!oldNum) {
        return null;
    }
    const newNum = oldNum ? Number(oldNum.replace('.', '').replace(',', '.')) : 0;
    let obj = [];
    if(pos(counter)) {
        obj = [];
        meta = pos(counter);
        let send =  {
            value: newNum || 0,
            type: "Integer",
            metadata: JSON.parse(meta)
        };
        obj.push(send);

    }

    if(obj.length !== 0) {
        return obj[0];
    }

    return {
        "value": newNum || 0,
        "type": "Integer"
    };
}

function stringToArray(string) {
    counter += 1;
  if (!string) {
    return {
        value: [],
        type: "List",
        metadata: {}
    };
  }
  if (string) {
      let obj = [];
      if(pos(counter)) {
          obj = [];
          meta = pos(counter);
          let send =  {
              value: string.split([',', ';']).map(raw => raw.trim()),
              type: "List",
              metadata: JSON.parse(meta)
          };
          obj.push(send);

      }

      if(obj.length !== 0) {
          return obj[0];
      }

        return {
            value: string.split([',', ';']).map(raw => raw.trim()),
            type: "List",
            metadata: {}
        }
  }
  return null;
}

function stringToArrayMandatory(string) {
    counter += 1;
  if (!string) {
    return null;
  }
  if (string) {
    let obj = [];
    if(pos(counter)) {
        obj = [];
        meta = pos(counter);
        let send =  {
            value: string.split([',', ';']).map(raw => raw.trim()),
            type: "List",
            metadata: JSON.parse(meta)
        };
        obj.push(send);
    }

    if(obj.length !== 0) {
        return obj[0];
    }
      return {
          value: string.split([',', ';']).map(raw => raw.trim()),
          type: "List",
          metadata: {}
      }
  }
  return null;
}

function dateCheck(date) {
  if (!date) {
    return '';
  }
  if (!moment(date, 'DD/MM/YYYY HH:mm').isValid()) {
    return null;
  }
  return date;
}

function mandatoryCheck(attribute) {

    counter += 1;

  if(!attribute) {
    return null
  }
  const test = attribute.split('');
  const forbide = ["<", ">", "'", ";", "(", ")"]
  test.forEach(element => {
    if(forbide.includes(element)) {
      throw "Forbiden char";
    }
  });
    let obj = [];
    if(pos(counter)) {
        obj = [];
        meta = pos(counter);
                    let send =  {
                        value: attribute,
                        type: "String",
                        metadata: JSON.parse(meta)
                    };
                    obj.push(send);

    }

    if(obj.length !== 0) {
        return obj[0];
    }

  return {
      "value": attribute,
      "type": "String",
      "metadata": {}
  };
}

function idTypeCheck(value) {
    counter += 1;
    if(pos(counter)) {
        return  {
            value: value,
            type: "String",
            metadata: JSON.parse(pos(counter))
        };
    }
    return {
        "value": value || "",
        "type": "String",
        "metadata": {}
    }
}

function idspec(attr) {
    counter = 0;
    counter += 1;
    return attr;
}

function testCheck(attr) {
    counter += 1;
    return attr;
}

function locationCheck(location) {
    counter += 1;
  if (!location) {
    return null;
  }

  const data = location.substring(location.indexOf('[') + 1, location.indexOf(']'));
  const coordinates = data.split(',', 2);

  const x = Number(coordinates[0]);
  const y = Number(coordinates[1]);

  if (data.length === 0) {
    return null;
  }
  if (typeof x === 'number' || typeof x === 'number') {
      let obj = [];
      if(pos(counter)) {
          obj = [];
          meta = pos(counter);
          let send =  {
              value: {
                  "type": "Point",
                  "coordinates": [x,y]
              },
              type: "geo:json",
              metadata: JSON.parse(meta)
          };
          obj.push(send);

      }

      if(obj.length !== 0) {
          return obj[0];
      }

    return {
            "value": {
                "type": "Point",
                "coordinates": [x, y]
            },
            "type": "geo:json"
    }
  }
  return null;
}

function locationCheckNoMand(location) {
    counter += 1;
  if (!location) {
    return {
        value: {
            type: "Point",
            coordinates: ['', ''],
        },
        type: "geo:json"
    };
  }

  const data = location.substring(location.indexOf('[') + 1, location.indexOf(']'));
  const coordinates = data.split(',', 2);

  const x = Number(coordinates[0]);
  const y = Number(coordinates[1]);

  if (data.length === 0) {
    return null;
  }
  if (typeof x === 'number' || typeof x === 'number') {
      let obj = [];
      if(pos(counter)) {
          obj = [];
          meta = pos(counter);
          let send =  {
              value: {
                  "type": "Point",
                  "coordinates": [x,y]
              },
              type: "geo:json",
              metadata: JSON.parse(meta)
          };
          obj.push(send);

      }

      if(obj.length !== 0) {
          return obj[0];
      }

      return {
          "value": {
              "type": "Point",
              "coordinates": [x, y]
          },
          "type": "geo:json"
      };
  }



  return null;
}

function extraCheck(data) {
  const result = data.substring(0, data.indexOf(' '));
  return commaNumToUnits(result);
}

function maxCargoVolume(data) {
  const result = data.substring(0, 2);
  return commaNumToUnits(result);
}

function removeForbiden(string) {
  if (!string) {
    return '';
  }
  const data1 = string.replace(/[()]/g, '');
  return data1;
}

function removeForbidenStrict(string) {
  const data1 = string.replace(/[()]/g, '');
  if (!data1 || data1.length === 0) {
    return null;
  }
  return data1;
}

module.exports = {
    locationCheck,
    commaNumToUnits,
    stringToArray,
    dateCheck,
    mandatoryCheck,
    extraCheck,
    maxCargoVolume,
    stringToArrayMandatory,
    commaNumToUnitsMandatory,
    removeForbiden,
    removeForbidenStrict,
    locationCheckNoMand,
    idTypeCheck,
    testCheck,
    idspec
};
