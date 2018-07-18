// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DiagnosticOrderSchema = require('../../schemas/diagnosticorder.schema');

// Inputs
const DiagnosticOrderInput = require('../../inputs/diagnosticorder.input');


const {
	diagnosticorderCreateResolver,
	diagnosticorderUpdateResolver,
	diagnosticorderDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DiagnosticOrder record.'
	},
	resource: {
		type: DiagnosticOrderInput,
		description: 'DiagnosticOrder Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a DiagnosticOrder record for deletion.'
	}
};

/**
 * @name exports.DiagnosticOrderCreateMutation
 * @summary DiagnosticOrderCreate Mutation.
 */
module.exports.DiagnosticOrderCreateMutation = {
	args: WriteArgs,
	description: 'Create a DiagnosticOrder',
	resolve: diagnosticorderCreateResolver,
	type: DiagnosticOrderSchema
};

/**
 * @name exports.DiagnosticOrderUpdateMutation
 * @summary DiagnosticOrderUpdate Mutation.
 */
module.exports.DiagnosticOrderUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DiagnosticOrders',
	resolve: diagnosticorderUpdateResolver,
	type: DiagnosticOrderSchema
};

/**
 * @name exports.DiagnosticOrderDeleteMutation
 * @summary DiagnosticOrderDelete Mutation.
 */
module.exports.DiagnosticOrderDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DiagnosticOrder',
	resolve: diagnosticorderDeleteResolver,
	type: DiagnosticOrderSchema
};
