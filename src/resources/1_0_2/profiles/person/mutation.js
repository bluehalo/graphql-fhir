// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PersonSchema = require('../../schemas/person.schema');

// Inputs
const PersonInput = require('../../inputs/person.input');


const {
	personCreateResolver,
	personUpdateResolver,
	personDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Person record.'
	},
	resource: {
		type: PersonInput,
		description: 'Person Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Person record for deletion.'
	}
};

/**
 * @name exports.PersonCreateMutation
 * @summary PersonCreate Mutation.
 */
module.exports.PersonCreateMutation = {
	args: WriteArgs,
	description: 'Create a Person',
	resolve: personCreateResolver,
	type: PersonSchema
};

/**
 * @name exports.PersonUpdateMutation
 * @summary PersonUpdate Mutation.
 */
module.exports.PersonUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Persons',
	resolve: personUpdateResolver,
	type: PersonSchema
};

/**
 * @name exports.PersonDeleteMutation
 * @summary PersonDelete Mutation.
 */
module.exports.PersonDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Person',
	resolve: personDeleteResolver,
	type: PersonSchema
};
