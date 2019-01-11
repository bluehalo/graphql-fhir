// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ClaimSchema = require('../../schemas/claim.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ClaimArgs = require('../../parameters/claim.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');

let args = Object.assign({}, ResourceArgs, ClaimArgs);

// Resolvers
const { getClaim, getClaimList, getClaimInstance } = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Claim',
	action: 'read',
};

/**
 * @name exports.ClaimQuery
 * @summary Claim query.
 */
module.exports.ClaimQuery = {
	description: 'Query for a single Claim',
	resolve: scopeInvariant(scopeOptions, getClaim),
	type: ClaimSchema,
	args: args,
};

/**
 * @name exports.ClaimListQuery
 * @summary Claim query.
 */
module.exports.ClaimListQuery = {
	description: 'Query for a more than or just one Claim',
	resolve: scopeInvariant(scopeOptions, getClaimList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ClaimInstanceQuery
 * @summary Claim query.
 */
module.exports.ClaimInstanceQuery = {
	description: 'Access information about a single Claim',
	resolve: scopeInvariant(scopeOptions, getClaimInstance),
	type: ClaimSchema,
	args: args,
};
