// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DiagnosticOrderSchema = require('../../schemas/diagnosticorder.schema');

// Inputs
const DiagnosticOrderInput = require('../../inputs/diagnosticorder.input');

// Resolvers
const {
	diagnosticorderCreateResolver,
	diagnosticorderUpdateResolver,
	diagnosticorderDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DiagnosticOrder',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description:
			'Unique identifier for creating/updating a DiagnosticOrder record.',
	},
	resource: {
		type: new GraphQLNonNull(DiagnosticOrderInput),
		description: 'DiagnosticOrder Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a DiagnosticOrder record for deletion.',
	},
};

/**
 * @name exports.DiagnosticOrderCreateMutation
 * @summary DiagnosticOrderCreate Mutation.
 */
module.exports.DiagnosticOrderCreateMutation = {
	args: WriteArgs,
	description: 'Create a DiagnosticOrder',
	resolve: scopeInvariant(scopeOptions, diagnosticorderCreateResolver),
	type: DiagnosticOrderSchema,
};

/**
 * @name exports.DiagnosticOrderUpdateMutation
 * @summary DiagnosticOrderUpdate Mutation.
 */
module.exports.DiagnosticOrderUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DiagnosticOrders',
	resolve: scopeInvariant(scopeOptions, diagnosticorderUpdateResolver),
	type: DiagnosticOrderSchema,
};

/**
 * @name exports.DiagnosticOrderDeleteMutation
 * @summary DiagnosticOrderDelete Mutation.
 */
module.exports.DiagnosticOrderDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DiagnosticOrder',
	resolve: scopeInvariant(scopeOptions, diagnosticorderDeleteResolver),
	type: DiagnosticOrderSchema,
};
