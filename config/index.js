const bunyan = require('bunyan');

const log = {
	development: () => {
		return bunyan.createLogger({ name: 'Ngsi-Connector-API-development', level: 'debug' });
	},
	evelopment: () => {
		return bunyan.createLogger({ name: 'Ngsi-Connector-API-production', level: 'info' });
	},
	evelopment: () => {
		return bunyan.createLogger({ name: 'Ngsi-Connector-API-test', level: 'fatal' });
	},
};

module.exports = {
	fiware_orion_url: 'http://localhost:1026',
	ngsi_connector_port: 3000,
	run_server_protocol: 'https',
	allowed_file_extentions: [ ".csv", ".json" ],
	default_return_entities: 100,
	expected_headers: ["fiware-service", "fiware-servicepath", "x-auth-token"],
	log: (env) => {
		if (env)
			return log[env]();
		return log[process.env.NODE_ENV || 'development']();
	},
};