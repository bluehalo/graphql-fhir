// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ImmunizationSchema = require('../../schemas/immunization.schema');

// Inputs
const ImmunizationInput = require('../../inputs/immunization.input');


const {
	immunizationCreateResolver,
	immunizationUpdateResolver,
	immunizationDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Immunization record.'
	},
	resource: {
		type: ImmunizationInput,
		description: 'Immunization Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Immunization record for deletion.'
	}
};

/**
 * @name exports.ImmunizationCreateMutation
 * @summary ImmunizationCreate Mutation.
 */
module.exports.ImmunizationCreateMutation = {
	args: WriteArgs,
	description: 'Create a Immunization',
	resolve: immunizationCreateResolver,
	type: ImmunizationSchema
};

/**
 * @name exports.ImmunizationUpdateMutation
 * @summary ImmunizationUpdate Mutation.
 */
module.exports.ImmunizationUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Immunizations',
	resolve: immunizationUpdateResolver,
	type: ImmunizationSchema
};

/**
 * @name exports.ImmunizationDeleteMutation
 * @summary ImmunizationDelete Mutation.
 */
module.exports.ImmunizationDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Immunization',
	resolve: immunizationDeleteResolver,
	type: ImmunizationSchema
};
