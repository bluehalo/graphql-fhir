// Schemas
const PractitionerRoleSchema = require('../../schemas/practitionerrole.schema');

// Arguments
const PractitionerRoleArgs = require('../../parameters/practitionerrole.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	practitionerroleResolver,
	practitionerroleListResolver,
	practitionerroleInstanceResolver
} = require('./resolver');

/**
 * @name exports.PractitionerRoleQuery
 * @summary PractitionerRole Query.
 */
module.exports.PractitionerRoleQuery = {
	args: Object.assign({}, CommonArgs, PractitionerRoleArgs),
	description: 'Query for a single PractitionerRole',
	resolve: practitionerroleResolver,
	type: PractitionerRoleSchema
};

/**
 * @name exports.PractitionerRoleListQuery
 * @summary PractitionerRoleList Query.
 */
module.exports.PractitionerRoleListQuery = {
	args: Object.assign({}, CommonArgs, PractitionerRoleArgs),
	description: 'Query for multiple PractitionerRoles',
	resolve: practitionerroleListResolver,
	type: new GraphQLList(PractitionerRoleSchema)
};

/**
 * @name exports.PractitionerRoleInstanceQuery
 * @summary PractitionerRoleInstance Query.
 */
module.exports.PractitionerRoleInstanceQuery = {
	description: 'Get information about a single PractitionerRole',
	resolve: practitionerroleInstanceResolver,
	type: PractitionerRoleSchema
};
