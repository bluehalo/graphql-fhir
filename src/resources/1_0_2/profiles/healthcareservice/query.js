// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const HealthcareServiceSchema = require('../../schemas/healthcareservice.schema');

// Arguments
const HealthcareServiceArgs = require('../../parameters/healthcareservice.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	healthcareserviceResolver,
	healthcareserviceListResolver,
	healthcareserviceInstanceResolver
} = require('./resolver');

/**
 * @name exports.HealthcareServiceQuery
 * @summary HealthcareService Query.
 */
module.exports.HealthcareServiceQuery = {
	args: Object.assign({}, CommonArgs, HealthcareServiceArgs),
	description: 'Query for a single HealthcareService',
	resolve: healthcareserviceResolver,
	type: HealthcareServiceSchema
};

/**
 * @name exports.HealthcareServiceListQuery
 * @summary HealthcareServiceList Query.
 */
module.exports.HealthcareServiceListQuery = {
	args: Object.assign({}, CommonArgs, HealthcareServiceArgs),
	description: 'Query for multiple HealthcareServices',
	resolve: healthcareserviceListResolver,
	type: BundleSchema
};

/**
 * @name exports.HealthcareServiceInstanceQuery
 * @summary HealthcareServiceInstance Query.
 */
module.exports.HealthcareServiceInstanceQuery = {
	description: 'Get information about a single HealthcareService',
	resolve: healthcareserviceInstanceResolver,
	type: HealthcareServiceSchema
};
