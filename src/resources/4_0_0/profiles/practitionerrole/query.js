// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const PractitionerRoleSchema = require('../../schemas/practitionerrole.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const PractitionerRoleArgs = require('../../parameters/practitionerrole.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	PractitionerRoleArgs,
);

// Resolvers
const {
	getPractitionerRole,
	getPractitionerRoleList,
	getPractitionerRoleInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'PractitionerRole',
	action: 'read',
};

/**
 * @name exports.PractitionerRoleQuery
 * @summary PractitionerRole query.
 */
module.exports.PractitionerRoleQuery = {
	description: 'Query for a single PractitionerRole',
	resolve: scopeInvariant(scopeOptions, getPractitionerRole),
	type: PractitionerRoleSchema,
	args: args,
};

/**
 * @name exports.PractitionerRoleListQuery
 * @summary PractitionerRole query.
 */
module.exports.PractitionerRoleListQuery = {
	description: 'Query for a more than or just one PractitionerRole',
	resolve: scopeInvariant(scopeOptions, getPractitionerRoleList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.PractitionerRoleInstanceQuery
 * @summary PractitionerRole query.
 */
module.exports.PractitionerRoleInstanceQuery = {
	description: 'Access information about a single PractitionerRole',
	resolve: scopeInvariant(scopeOptions, getPractitionerRoleInstance),
	type: PractitionerRoleSchema,
	args: args,
};
