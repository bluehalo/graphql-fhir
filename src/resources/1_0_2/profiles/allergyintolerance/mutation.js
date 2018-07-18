// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const AllergyIntoleranceSchema = require('../../schemas/allergyintolerance.schema');

// Inputs
const AllergyIntoleranceInput = require('../../inputs/allergyintolerance.input');


const {
	allergyintoleranceCreateResolver,
	allergyintoleranceUpdateResolver,
	allergyintoleranceDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a AllergyIntolerance record.'
	},
	resource: {
		type: AllergyIntoleranceInput,
		description: 'AllergyIntolerance Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a AllergyIntolerance record for deletion.'
	}
};

/**
 * @name exports.AllergyIntoleranceCreateMutation
 * @summary AllergyIntoleranceCreate Mutation.
 */
module.exports.AllergyIntoleranceCreateMutation = {
	args: WriteArgs,
	description: 'Create a AllergyIntolerance',
	resolve: allergyintoleranceCreateResolver,
	type: AllergyIntoleranceSchema
};

/**
 * @name exports.AllergyIntoleranceUpdateMutation
 * @summary AllergyIntoleranceUpdate Mutation.
 */
module.exports.AllergyIntoleranceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple AllergyIntolerances',
	resolve: allergyintoleranceUpdateResolver,
	type: AllergyIntoleranceSchema
};

/**
 * @name exports.AllergyIntoleranceDeleteMutation
 * @summary AllergyIntoleranceDelete Mutation.
 */
module.exports.AllergyIntoleranceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single AllergyIntolerance',
	resolve: allergyintoleranceDeleteResolver,
	type: AllergyIntoleranceSchema
};
