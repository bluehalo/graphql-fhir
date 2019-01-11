// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MedicinalProductAuthorizationSchema = require('../../schemas/medicinalproductauthorization.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MedicinalProductAuthorizationArgs = require('../../parameters/medicinalproductauthorization.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	MedicinalProductAuthorizationArgs,
);

// Resolvers
const {
	getMedicinalProductAuthorization,
	getMedicinalProductAuthorizationList,
	getMedicinalProductAuthorizationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'MedicinalProductAuthorization',
	action: 'read',
};

/**
 * @name exports.MedicinalProductAuthorizationQuery
 * @summary MedicinalProductAuthorization query.
 */
module.exports.MedicinalProductAuthorizationQuery = {
	description: 'Query for a single MedicinalProductAuthorization',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductAuthorization),
	type: MedicinalProductAuthorizationSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductAuthorizationListQuery
 * @summary MedicinalProductAuthorization query.
 */
module.exports.MedicinalProductAuthorizationListQuery = {
	description:
		'Query for a more than or just one MedicinalProductAuthorization',
	resolve: scopeInvariant(scopeOptions, getMedicinalProductAuthorizationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MedicinalProductAuthorizationInstanceQuery
 * @summary MedicinalProductAuthorization query.
 */
module.exports.MedicinalProductAuthorizationInstanceQuery = {
	description:
		'Access information about a single MedicinalProductAuthorization',
	resolve: scopeInvariant(
		scopeOptions,
		getMedicinalProductAuthorizationInstance,
	),
	type: MedicinalProductAuthorizationSchema,
	args: args,
};
