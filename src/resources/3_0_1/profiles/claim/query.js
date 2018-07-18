// Schemas
const ClaimSchema = require('../../schemas/claim.schema');

// Arguments
const ClaimArgs = require('../../parameters/claim.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	claimResolver,
	claimListResolver,
	claimInstanceResolver
} = require('./resolver');

/**
 * @name exports.ClaimQuery
 * @summary Claim Query.
 */
module.exports.ClaimQuery = {
	args: Object.assign({}, CommonArgs, ClaimArgs),
	description: 'Query for a single Claim',
	resolve: claimResolver,
	type: ClaimSchema
};

/**
 * @name exports.ClaimListQuery
 * @summary ClaimList Query.
 */
module.exports.ClaimListQuery = {
	args: Object.assign({}, CommonArgs, ClaimArgs),
	description: 'Query for multiple Claims',
	resolve: claimListResolver,
	type: new GraphQLList(ClaimSchema)
};

/**
 * @name exports.ClaimInstanceQuery
 * @summary ClaimInstance Query.
 */
module.exports.ClaimInstanceQuery = {
	description: 'Get information about a single Claim',
	resolve: claimInstanceResolver,
	type: ClaimSchema
};
