// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const HealthcareServiceSchema = require('../../schemas/healthcareservice.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const HealthcareServiceArgs = require('../../parameters/healthcareservice.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	HealthcareServiceArgs,
);

// Resolvers
const {
	getHealthcareService,
	getHealthcareServiceList,
	getHealthcareServiceInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'HealthcareService',
	action: 'read',
};

/**
 * @name exports.HealthcareServiceQuery
 * @summary HealthcareService query.
 */
module.exports.HealthcareServiceQuery = {
	description: 'Query for a single HealthcareService',
	resolve: scopeInvariant(scopeOptions, getHealthcareService),
	type: HealthcareServiceSchema,
	args: args,
};

/**
 * @name exports.HealthcareServiceListQuery
 * @summary HealthcareService query.
 */
module.exports.HealthcareServiceListQuery = {
	description: 'Query for a more than or just one HealthcareService',
	resolve: scopeInvariant(scopeOptions, getHealthcareServiceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.HealthcareServiceInstanceQuery
 * @summary HealthcareService query.
 */
module.exports.HealthcareServiceInstanceQuery = {
	description: 'Access information about a single HealthcareService',
	resolve: scopeInvariant(scopeOptions, getHealthcareServiceInstance),
	type: HealthcareServiceSchema,
	args: args,
};
