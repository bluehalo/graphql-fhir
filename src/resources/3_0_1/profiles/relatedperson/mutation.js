// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const RelatedPersonSchema = require('../../schemas/relatedperson.schema');

// Inputs
const RelatedPersonInput = require('../../inputs/relatedperson.input');


const {
	relatedpersonCreateResolver,
	relatedpersonUpdateResolver,
	relatedpersonDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a RelatedPerson record.'
	},
	resource: {
		type: RelatedPersonInput,
		description: 'RelatedPerson Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a RelatedPerson record for deletion.'
	}
};

/**
 * @name exports.RelatedPersonCreateMutation
 * @summary RelatedPersonCreate Mutation.
 */
module.exports.RelatedPersonCreateMutation = {
	args: WriteArgs,
	description: 'Create a RelatedPerson',
	resolve: relatedpersonCreateResolver,
	type: RelatedPersonSchema
};

/**
 * @name exports.RelatedPersonUpdateMutation
 * @summary RelatedPersonUpdate Mutation.
 */
module.exports.RelatedPersonUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple RelatedPersons',
	resolve: relatedpersonUpdateResolver,
	type: RelatedPersonSchema
};

/**
 * @name exports.RelatedPersonDeleteMutation
 * @summary RelatedPersonDelete Mutation.
 */
module.exports.RelatedPersonDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single RelatedPerson',
	resolve: relatedpersonDeleteResolver,
	type: RelatedPersonSchema
};
