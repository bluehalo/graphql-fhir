// Schemas
const HealthcareServiceSchema = require('../../schemas/healthcareservice.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const HealthcareServiceArgs = require('../../parameters/healthcareservice.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	healthcareserviceResolver,
	healthcareserviceListResolver,
	healthcareserviceInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'HealthcareService',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.HealthcareServiceQuery
 * @summary HealthcareService Query.
 */
module.exports.HealthcareServiceQuery = {
	args: Object.assign({}, CommonArgs, HealthcareServiceArgs),
	description: 'Query for a single HealthcareService',
	resolve: scopeInvariant(scopeOptions, healthcareserviceResolver),
	type: HealthcareServiceSchema,
};

/**
 * @name exports.HealthcareServiceListQuery
 * @summary HealthcareServiceList Query.
 */
module.exports.HealthcareServiceListQuery = {
	args: Object.assign({}, CommonArgs, HealthcareServiceArgs),
	description: 'Query for multiple HealthcareServices',
	resolve: scopeInvariant(scopeOptions, healthcareserviceListResolver),
	type: BundleSchema,
};

/**
 * @name exports.HealthcareServiceInstanceQuery
 * @summary HealthcareServiceInstance Query.
 */
module.exports.HealthcareServiceInstanceQuery = {
	description: 'Get information about a single HealthcareService',
	resolve: scopeInvariant(scopeOptions, healthcareserviceInstanceResolver),
	type: HealthcareServiceSchema,
};
