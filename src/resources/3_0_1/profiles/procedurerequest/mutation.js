// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ProcedureRequestSchema = require('../../schemas/procedurerequest.schema');

// Inputs
const ProcedureRequestInput = require('../../inputs/procedurerequest.input');

// Resolvers
const {
	procedurerequestCreateResolver,
	procedurerequestUpdateResolver,
	procedurerequestDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ProcedureRequest',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a ProcedureRequest record.'
	},
	resource: {
		type: new GraphQLNonNull(ProcedureRequestInput),
		description: 'ProcedureRequest Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a ProcedureRequest record for deletion.'
	}
};

/**
 * @name exports.ProcedureRequestCreateMutation
 * @summary ProcedureRequestCreate Mutation.
 */
module.exports.ProcedureRequestCreateMutation = {
	args: WriteArgs,
	description: 'Create a ProcedureRequest',
	resolve: scopeInvariant(scopeOptions, procedurerequestCreateResolver),
	type: ProcedureRequestSchema
};

/**
 * @name exports.ProcedureRequestUpdateMutation
 * @summary ProcedureRequestUpdate Mutation.
 */
module.exports.ProcedureRequestUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple ProcedureRequests',
	resolve: scopeInvariant(scopeOptions, procedurerequestUpdateResolver),
	type: ProcedureRequestSchema
};

/**
 * @name exports.ProcedureRequestDeleteMutation
 * @summary ProcedureRequestDelete Mutation.
 */
module.exports.ProcedureRequestDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single ProcedureRequest',
	resolve: scopeInvariant(scopeOptions, procedurerequestDeleteResolver),
	type: ProcedureRequestSchema
};
