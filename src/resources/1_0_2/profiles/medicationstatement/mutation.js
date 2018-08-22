// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const MedicationStatementSchema = require('../../schemas/medicationstatement.schema');

// Inputs
const MedicationStatementInput = require('../../inputs/medicationstatement.input');

// Resolvers
const {
	medicationstatementCreateResolver,
	medicationstatementUpdateResolver,
	medicationstatementDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'MedicationStatement',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a MedicationStatement record.'
	},
	resource: {
		type: new GraphQLNonNull(MedicationStatementInput),
		description: 'MedicationStatement Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a MedicationStatement record for deletion.'
	}
};

/**
 * @name exports.MedicationStatementCreateMutation
 * @summary MedicationStatementCreate Mutation.
 */
module.exports.MedicationStatementCreateMutation = {
	args: WriteArgs,
	description: 'Create a MedicationStatement',
	resolve: scopeInvariant(scopeOptions, medicationstatementCreateResolver),
	type: MedicationStatementSchema
};

/**
 * @name exports.MedicationStatementUpdateMutation
 * @summary MedicationStatementUpdate Mutation.
 */
module.exports.MedicationStatementUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple MedicationStatements',
	resolve: scopeInvariant(scopeOptions, medicationstatementUpdateResolver),
	type: MedicationStatementSchema
};

/**
 * @name exports.MedicationStatementDeleteMutation
 * @summary MedicationStatementDelete Mutation.
 */
module.exports.MedicationStatementDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single MedicationStatement',
	resolve: scopeInvariant(scopeOptions, medicationstatementDeleteResolver),
	type: MedicationStatementSchema
};
