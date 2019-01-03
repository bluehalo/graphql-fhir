// Schemas
const ClaimSchema = require('../../schemas/claim.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ClaimArgs = require('../../parameters/claim.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	claimResolver,
	claimListResolver,
	claimInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Claim',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.ClaimQuery
 * @summary Claim Query.
 */
module.exports.ClaimQuery = {
	args: Object.assign({}, CommonArgs, ClaimArgs),
	description: 'Query for a single Claim',
	resolve: scopeInvariant(scopeOptions, claimResolver),
	type: ClaimSchema,
};

/**
 * @name exports.ClaimListQuery
 * @summary ClaimList Query.
 */
module.exports.ClaimListQuery = {
	args: Object.assign({}, CommonArgs, ClaimArgs),
	description: 'Query for multiple Claims',
	resolve: scopeInvariant(scopeOptions, claimListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ClaimInstanceQuery
 * @summary ClaimInstance Query.
 */
module.exports.ClaimInstanceQuery = {
	description: 'Get information about a single Claim',
	resolve: scopeInvariant(scopeOptions, claimInstanceResolver),
	type: ClaimSchema,
};
