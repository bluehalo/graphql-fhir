// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ClaimSchema = require('../../schemas/claim.schema');

// Inputs
const ClaimInput = require('../../inputs/claim.input');


const {
	claimCreateResolver,
	claimUpdateResolver,
	claimDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Claim record.'
	},
	resource: {
		type: ClaimInput,
		description: 'Claim Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Claim record for deletion.'
	}
};

/**
 * @name exports.ClaimCreateMutation
 * @summary ClaimCreate Mutation.
 */
module.exports.ClaimCreateMutation = {
	args: WriteArgs,
	description: 'Create a Claim',
	resolve: claimCreateResolver,
	type: ClaimSchema
};

/**
 * @name exports.ClaimUpdateMutation
 * @summary ClaimUpdate Mutation.
 */
module.exports.ClaimUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Claims',
	resolve: claimUpdateResolver,
	type: ClaimSchema
};

/**
 * @name exports.ClaimDeleteMutation
 * @summary ClaimDelete Mutation.
 */
module.exports.ClaimDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Claim',
	resolve: claimDeleteResolver,
	type: ClaimSchema
};
