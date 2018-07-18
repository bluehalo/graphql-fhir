// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ValueSetSchema = require('../../schemas/valueset.schema');

// Inputs
const ValueSetInput = require('../../inputs/valueset.input');


const {
	valuesetCreateResolver,
	valuesetUpdateResolver,
	valuesetDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ValueSet record.'
	},
	resource: {
		type: ValueSetInput,
		description: 'ValueSet Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a ValueSet record for deletion.'
	}
};

/**
 * @name exports.ValueSetCreateMutation
 * @summary ValueSetCreate Mutation.
 */
module.exports.ValueSetCreateMutation = {
	args: WriteArgs,
	description: 'Create a ValueSet',
	resolve: valuesetCreateResolver,
	type: ValueSetSchema
};

/**
 * @name exports.ValueSetUpdateMutation
 * @summary ValueSetUpdate Mutation.
 */
module.exports.ValueSetUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ValueSets',
	resolve: valuesetUpdateResolver,
	type: ValueSetSchema
};

/**
 * @name exports.ValueSetDeleteMutation
 * @summary ValueSetDelete Mutation.
 */
module.exports.ValueSetDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ValueSet',
	resolve: valuesetDeleteResolver,
	type: ValueSetSchema
};
