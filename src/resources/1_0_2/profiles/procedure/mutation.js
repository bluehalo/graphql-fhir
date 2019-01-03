// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const ProcedureSchema = require('../../schemas/procedure.schema');

// Inputs
const ProcedureInput = require('../../inputs/procedure.input');

// Resolvers
const {
	procedureCreateResolver,
	procedureUpdateResolver,
	procedureDeleteResolver,
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Procedure',
	action: 'write',
	version: '1_0_2',
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Procedure record.',
	},
	resource: {
		type: new GraphQLNonNull(ProcedureInput),
		description: 'Procedure Information for the record.',
	},
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description:
			'Unique identifier for selecting a Procedure record for deletion.',
	},
};

/**
 * @name exports.ProcedureCreateMutation
 * @summary ProcedureCreate Mutation.
 */
module.exports.ProcedureCreateMutation = {
	args: WriteArgs,
	description: 'Create a Procedure',
	resolve: scopeInvariant(scopeOptions, procedureCreateResolver),
	type: ProcedureSchema,
};

/**
 * @name exports.ProcedureUpdateMutation
 * @summary ProcedureUpdate Mutation.
 */
module.exports.ProcedureUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Procedures',
	resolve: scopeInvariant(scopeOptions, procedureUpdateResolver),
	type: ProcedureSchema,
};

/**
 * @name exports.ProcedureDeleteMutation
 * @summary ProcedureDelete Mutation.
 */
module.exports.ProcedureDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Procedure',
	resolve: scopeInvariant(scopeOptions, procedureDeleteResolver),
	type: ProcedureSchema,
};
