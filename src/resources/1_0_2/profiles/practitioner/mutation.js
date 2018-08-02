// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PractitionerSchema = require('../../schemas/practitioner.schema');

// Inputs
const PractitionerInput = require('../../inputs/practitioner.input');


const {
	practitionerCreateResolver,
	practitionerUpdateResolver,
	practitionerDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Practitioner record.'
	},
	resource: {
		type: PractitionerInput,
		description: 'Practitioner Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Practitioner record for deletion.'
	}
};

/**
 * @name exports.PractitionerCreateMutation
 * @summary PractitionerCreate Mutation.
 */
module.exports.PractitionerCreateMutation = {
	args: WriteArgs,
	description: 'Create a Practitioner',
	resolve: practitionerCreateResolver,
	type: PractitionerSchema
};

/**
 * @name exports.PractitionerUpdateMutation
 * @summary PractitionerUpdate Mutation.
 */
module.exports.PractitionerUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Practitioners',
	resolve: practitionerUpdateResolver,
	type: PractitionerSchema
};

/**
 * @name exports.PractitionerDeleteMutation
 * @summary PractitionerDelete Mutation.
 */
module.exports.PractitionerDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Practitioner',
	resolve: practitionerDeleteResolver,
	type: PractitionerSchema
};
