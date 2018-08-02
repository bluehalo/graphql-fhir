// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ExpansionProfileSchema = require('../../schemas/expansionprofile.schema');

// Inputs
const ExpansionProfileInput = require('../../inputs/expansionprofile.input');


const {
	expansionprofileCreateResolver,
	expansionprofileUpdateResolver,
	expansionprofileDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ExpansionProfile record.'
	},
	resource: {
		type: ExpansionProfileInput,
		description: 'ExpansionProfile Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ExpansionProfile record for deletion.'
	}
};

/**
 * @name exports.ExpansionProfileCreateMutation
 * @summary ExpansionProfileCreate Mutation.
 */
module.exports.ExpansionProfileCreateMutation = {
	args: WriteArgs,
	description: 'Create a ExpansionProfile',
	resolve: expansionprofileCreateResolver,
	type: ExpansionProfileSchema
};

/**
 * @name exports.ExpansionProfileUpdateMutation
 * @summary ExpansionProfileUpdate Mutation.
 */
module.exports.ExpansionProfileUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ExpansionProfiles',
	resolve: expansionprofileUpdateResolver,
	type: ExpansionProfileSchema
};

/**
 * @name exports.ExpansionProfileDeleteMutation
 * @summary ExpansionProfileDelete Mutation.
 */
module.exports.ExpansionProfileDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ExpansionProfile',
	resolve: expansionprofileDeleteResolver,
	type: ExpansionProfileSchema
};
