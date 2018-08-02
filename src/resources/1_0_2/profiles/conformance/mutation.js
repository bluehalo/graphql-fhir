// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ConformanceSchema = require('../../schemas/conformance.schema');

// Inputs
const ConformanceInput = require('../../inputs/conformance.input');


const {
	conformanceCreateResolver,
	conformanceUpdateResolver,
	conformanceDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Conformance record.'
	},
	resource: {
		type: ConformanceInput,
		description: 'Conformance Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a Conformance record for deletion.'
	}
};

/**
 * @name exports.ConformanceCreateMutation
 * @summary ConformanceCreate Mutation.
 */
module.exports.ConformanceCreateMutation = {
	args: WriteArgs,
	description: 'Create a Conformance',
	resolve: conformanceCreateResolver,
	type: ConformanceSchema
};

/**
 * @name exports.ConformanceUpdateMutation
 * @summary ConformanceUpdate Mutation.
 */
module.exports.ConformanceUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Conformances',
	resolve: conformanceUpdateResolver,
	type: ConformanceSchema
};

/**
 * @name exports.ConformanceDeleteMutation
 * @summary ConformanceDelete Mutation.
 */
module.exports.ConformanceDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Conformance',
	resolve: conformanceDeleteResolver,
	type: ConformanceSchema
};
