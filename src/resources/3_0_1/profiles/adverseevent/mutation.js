// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const AdverseEventSchema = require('../../schemas/adverseevent.schema');

// Inputs
const AdverseEventInput = require('../../inputs/adverseevent.input');


const {
	adverseeventCreateResolver,
	adverseeventUpdateResolver,
	adverseeventDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a AdverseEvent record.'
	},
	resource: {
		type: AdverseEventInput,
		description: 'AdverseEvent Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a AdverseEvent record for deletion.'
	}
};

/**
 * @name exports.AdverseEventCreateMutation
 * @summary AdverseEventCreate Mutation.
 */
module.exports.AdverseEventCreateMutation = {
	args: WriteArgs,
	description: 'Create a AdverseEvent',
	resolve: adverseeventCreateResolver,
	type: AdverseEventSchema
};

/**
 * @name exports.AdverseEventUpdateMutation
 * @summary AdverseEventUpdate Mutation.
 */
module.exports.AdverseEventUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple AdverseEvents',
	resolve: adverseeventUpdateResolver,
	type: AdverseEventSchema
};

/**
 * @name exports.AdverseEventDeleteMutation
 * @summary AdverseEventDelete Mutation.
 */
module.exports.AdverseEventDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single AdverseEvent',
	resolve: adverseeventDeleteResolver,
	type: AdverseEventSchema
};
