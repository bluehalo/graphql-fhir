// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PractitionerRoleSchema = require('../../schemas/practitionerrole.schema');

// Inputs
const PractitionerRoleInput = require('../../inputs/practitionerrole.input');

// Resolvers
const {
	practitionerroleCreateResolver,
	practitionerroleUpdateResolver,
	practitionerroleDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'PractitionerRole',
	action: 'write',
	version: '3_0_1'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a PractitionerRole record.'
	},
	resource: {
		type: new GraphQLNonNull(PractitionerRoleInput),
		description: 'PractitionerRole Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a PractitionerRole record for deletion.'
	}
};

/**
 * @name exports.PractitionerRoleCreateMutation
 * @summary PractitionerRoleCreate Mutation.
 */
module.exports.PractitionerRoleCreateMutation = {
	args: WriteArgs,
	description: 'Create a PractitionerRole',
	resolve: scopeInvariant(scopeOptions, practitionerroleCreateResolver),
	type: PractitionerRoleSchema
};

/**
 * @name exports.PractitionerRoleUpdateMutation
 * @summary PractitionerRoleUpdate Mutation.
 */
module.exports.PractitionerRoleUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple PractitionerRoles',
	resolve: scopeInvariant(scopeOptions, practitionerroleUpdateResolver),
	type: PractitionerRoleSchema
};

/**
 * @name exports.PractitionerRoleDeleteMutation
 * @summary PractitionerRoleDelete Mutation.
 */
module.exports.PractitionerRoleDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single PractitionerRole',
	resolve: scopeInvariant(scopeOptions, practitionerroleDeleteResolver),
	type: PractitionerRoleSchema
};
