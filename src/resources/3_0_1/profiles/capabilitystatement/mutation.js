// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const CapabilityStatementSchema = require('../../schemas/capabilitystatement.schema');

// Inputs
const CapabilityStatementInput = require('../../inputs/capabilitystatement.input');


const {
	capabilitystatementCreateResolver,
	capabilitystatementUpdateResolver,
	capabilitystatementDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a CapabilityStatement record.'
	},
	resource: {
		type: CapabilityStatementInput,
		description: 'CapabilityStatement Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a CapabilityStatement record for deletion.'
	}
};

/**
 * @name exports.CapabilityStatementCreateMutation
 * @summary CapabilityStatementCreate Mutation.
 */
module.exports.CapabilityStatementCreateMutation = {
	args: WriteArgs,
	description: 'Create a CapabilityStatement',
	resolve: capabilitystatementCreateResolver,
	type: CapabilityStatementSchema
};

/**
 * @name exports.CapabilityStatementUpdateMutation
 * @summary CapabilityStatementUpdate Mutation.
 */
module.exports.CapabilityStatementUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple CapabilityStatements',
	resolve: capabilitystatementUpdateResolver,
	type: CapabilityStatementSchema
};

/**
 * @name exports.CapabilityStatementDeleteMutation
 * @summary CapabilityStatementDelete Mutation.
 */
module.exports.CapabilityStatementDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single CapabilityStatement',
	resolve: capabilitystatementDeleteResolver,
	type: CapabilityStatementSchema
};
