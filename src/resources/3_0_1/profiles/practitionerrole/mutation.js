// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const PractitionerRoleSchema = require('../../schemas/practitionerrole.schema');

// Inputs
const PractitionerRoleInput = require('../../inputs/practitionerrole.input');


const {
	practitionerroleCreateResolver,
	practitionerroleUpdateResolver,
	practitionerroleDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a PractitionerRole record.'
	},
	resource: {
		type: PractitionerRoleInput,
		description: 'PractitionerRole Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
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
	resolve: practitionerroleCreateResolver,
	type: PractitionerRoleSchema
};

/**
 * @name exports.PractitionerRoleUpdateMutation
 * @summary PractitionerRoleUpdate Mutation.
 */
module.exports.PractitionerRoleUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple PractitionerRoles',
	resolve: practitionerroleUpdateResolver,
	type: PractitionerRoleSchema
};

/**
 * @name exports.PractitionerRoleDeleteMutation
 * @summary PractitionerRoleDelete Mutation.
 */
module.exports.PractitionerRoleDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single PractitionerRole',
	resolve: practitionerroleDeleteResolver,
	type: PractitionerRoleSchema
};
