const csv = require( "csvtojson" );
const ruleChecks = require( "../services/property" ).rulesCheck;
const { processEntity } = require( "./property" );

const parseOperations = {

    getData: rawData => csv( { delimiter: ";" } ).fromString( rawData ),

    getRules: ( parsedData, ext ) => {
        let rules;
        try {
            rules = ruleChecks( parsedData, ext );
        } catch ( error ) {
            return Promise.reject( error.message );
        }
        return Promise.resolve( rules );
    },

    getEntity: ( rules, parsedData, option, ext ) => {
        if (ext === '.json') {
            const result = [];
            const errors = [];
            parsedData[0].forEach( ( entity ) => {
            try {
                result.push( processEntity( rules, entity, option, ext ) );
            } catch ( error ) {
                errors.push( error.message );
            }
        } );
        return Promise.resolve( { errors, result } );
        } else {
            const result = [];
            const errors = [];
            parsedData.forEach( ( entity ) => {
            try {
                result.push( processEntity( rules, entity, option, ext ) );
            } catch ( error ) {
                errors.push( error.message );
            }
        } );
        return Promise.resolve( { errors, result } );
        }
        
    },
};

function parse( rawData, option, fileType ) {
    if ( fileType === ".json" ) {
        const data = [];
        data.push( JSON.parse( rawData ) );
        return parseOperations.getRules( data, '.json' )
            .then( rules => parseOperations.getEntity( rules, data, option, '.json' ) )
            .then( checkedData => Promise.resolve( checkedData ) )
            .catch( error => Promise.reject( error ) );
    }
    return parseOperations.getData( rawData )
        .then( parsedData => parseOperations.getRules( parsedData )
            .then( rules => parseOperations.getEntity( rules, parsedData, option )
                .then( checkedData => Promise.resolve( checkedData ) ) ) )
        .catch( error => Promise.reject( error ) );
}

module.exports = {
    parse,
};
