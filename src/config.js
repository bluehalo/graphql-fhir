const path = require('path');

/**
 * @name VERSION
 * @summary Versions constants. These are the versions we support
 */
const VERSION = {
	'1_0_2': '1_0_2',
	'3_0_1': '3_0_1'
};

/**
 * @name SERVER_CONFIG
 * @summary Server configurations.
 */
const SERVER_CONFIG = {
	// Default version of FHIR, needed to know which version of OperationOutcome to
	// use for 404 errors if a valid version is not present
	defaultVersion: '3_0_1',
	// defaut port for the app
	port: 3000,
	// Logger configurations
	logging: {
		level: 'debug'
	},
	// Auth configurations
	auth: {
		name: 'bearer',
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		introspectionUrl: process.env.INTROSPECTION_URL,
		strategy: path.posix.resolve('src/strategies/bearer.strategy.js'),
		passportOptions: {
			session: false
		}
	}
};

/**
 * @name DATE_CONFIG
 * @summary Date configurations.
 */
const DATE_CONFIG = {
	// The following should not be edited unless you are using defaults that
	// are different from what's defined in 3.0.1 structure defintions
	dateFormat: 'YYYY-MM-DD',
	timeFormat: 'HH:mm:ss',
	dateTimeFormat: 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
};

/**
 * @name RESOURCE_CONFIG
 * @summary Resource configuration locations. These path's tell our
 * server where to locate resources so we can enable them in GraphQL
 */
const RESOURCE_CONFIG = {
	// base folder for all the resources relative to src
	resourceBase: 'resources',
	// Path is relative to version folder under resources
	profilesRelativePath: 'profiles/**/index.js'
};

module.exports = {
	RESOURCE_CONFIG,
	SERVER_CONFIG,
	DATE_CONFIG,
	VERSION
};
