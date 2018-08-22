// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PractitionerSchema = require('../../schemas/practitioner.schema');

// Inputs
const PractitionerInput = require('../../inputs/practitioner.input');

// Resolvers
const {
	practitionerCreateResolver,
	practitionerUpdateResolver,
	practitionerDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Practitioner',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a Practitioner record.'
	},
	resource: {
		type: new GraphQLNonNull(PractitionerInput),
		description: 'Practitioner Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
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
	resolve: scopeInvariant(scopeOptions, practitionerCreateResolver),
	type: PractitionerSchema
};

/**
 * @name exports.PractitionerUpdateMutation
 * @summary PractitionerUpdate Mutation.
 */
module.exports.PractitionerUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple Practitioners',
	resolve: scopeInvariant(scopeOptions, practitionerUpdateResolver),
	type: PractitionerSchema
};

/**
 * @name exports.PractitionerDeleteMutation
 * @summary PractitionerDelete Mutation.
 */
module.exports.PractitionerDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single Practitioner',
	resolve: scopeInvariant(scopeOptions, practitionerDeleteResolver),
	type: PractitionerSchema
};
