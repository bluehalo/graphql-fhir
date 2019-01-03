// Schemas
const PersonSchema = require('../../schemas/person.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const PersonArgs = require('../../parameters/person.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	personResolver,
	personListResolver,
	personInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Person',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.PersonQuery
 * @summary Person Query.
 */
module.exports.PersonQuery = {
	args: Object.assign({}, CommonArgs, PersonArgs),
	description: 'Query for a single Person',
	resolve: scopeInvariant(scopeOptions, personResolver),
	type: PersonSchema,
};

/**
 * @name exports.PersonListQuery
 * @summary PersonList Query.
 */
module.exports.PersonListQuery = {
	args: Object.assign({}, CommonArgs, PersonArgs),
	description: 'Query for multiple Persons',
	resolve: scopeInvariant(scopeOptions, personListResolver),
	type: BundleSchema,
};

/**
 * @name exports.PersonInstanceQuery
 * @summary PersonInstance Query.
 */
module.exports.PersonInstanceQuery = {
	description: 'Get information about a single Person',
	resolve: scopeInvariant(scopeOptions, personInstanceResolver),
	type: PersonSchema,
};
