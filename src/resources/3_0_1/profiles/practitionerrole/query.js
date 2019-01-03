// Schemas
const PractitionerRoleSchema = require('../../schemas/practitionerrole.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const PractitionerRoleArgs = require('../../parameters/practitionerrole.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	practitionerroleResolver,
	practitionerroleListResolver,
	practitionerroleInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'PractitionerRole',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.PractitionerRoleQuery
 * @summary PractitionerRole Query.
 */
module.exports.PractitionerRoleQuery = {
	args: Object.assign({}, CommonArgs, PractitionerRoleArgs),
	description: 'Query for a single PractitionerRole',
	resolve: scopeInvariant(scopeOptions, practitionerroleResolver),
	type: PractitionerRoleSchema,
};

/**
 * @name exports.PractitionerRoleListQuery
 * @summary PractitionerRoleList Query.
 */
module.exports.PractitionerRoleListQuery = {
	args: Object.assign({}, CommonArgs, PractitionerRoleArgs),
	description: 'Query for multiple PractitionerRoles',
	resolve: scopeInvariant(scopeOptions, practitionerroleListResolver),
	type: BundleSchema,
};

/**
 * @name exports.PractitionerRoleInstanceQuery
 * @summary PractitionerRoleInstance Query.
 */
module.exports.PractitionerRoleInstanceQuery = {
	description: 'Get information about a single PractitionerRole',
	resolve: scopeInvariant(scopeOptions, practitionerroleInstanceResolver),
	type: PractitionerRoleSchema,
};
