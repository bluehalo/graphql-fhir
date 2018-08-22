// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const SpecimenSchema = require('../../schemas/specimen.schema');

// Inputs
const SpecimenInput = require('../../inputs/specimen.input');

// Resolvers
const {
	specimenCreateResolver,
	specimenUpdateResolver,
	specimenDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Specimen',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Specimen record.'
	},
	resource: {
		type: new GraphQLNonNull(SpecimenInput),
		description: 'Specimen Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a Specimen record for deletion.'
	}
};

/**
 * @name exports.SpecimenCreateMutation
 * @summary SpecimenCreate Mutation.
 */
module.exports.SpecimenCreateMutation = {
	args: WriteArgs,
	description: 'Create a Specimen',
	resolve: scopeInvariant(scopeOptions, specimenCreateResolver),
	type: SpecimenSchema
};

/**
 * @name exports.SpecimenUpdateMutation
 * @summary SpecimenUpdate Mutation.
 */
module.exports.SpecimenUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Specimens',
	resolve: scopeInvariant(scopeOptions, specimenUpdateResolver),
	type: SpecimenSchema
};

/**
 * @name exports.SpecimenDeleteMutation
 * @summary SpecimenDelete Mutation.
 */
module.exports.SpecimenDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Specimen',
	resolve: scopeInvariant(scopeOptions, specimenDeleteResolver),
	type: SpecimenSchema
};
