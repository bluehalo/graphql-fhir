// Schemas
const PersonSchema = require('../../schemas/person.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const PersonArgs = require('../../parameters/person.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	personResolver,
	personListResolver,
	personInstanceResolver
} = require('./resolver');

/**
 * @name exports.PersonQuery
 * @summary Person Query.
 */
module.exports.PersonQuery = {
	args: Object.assign({}, CommonArgs, PersonArgs),
	description: 'Query for a single Person',
	resolve: personResolver,
	type: PersonSchema
};

/**
 * @name exports.PersonListQuery
 * @summary PersonList Query.
 */
module.exports.PersonListQuery = {
	args: Object.assign({}, CommonArgs, PersonArgs),
	description: 'Query for multiple Persons',
	resolve: personListResolver,
	type: BundleSchema
};

/**
 * @name exports.PersonInstanceQuery
 * @summary PersonInstance Query.
 */
module.exports.PersonInstanceQuery = {
	description: 'Get information about a single Person',
	resolve: personInstanceResolver,
	type: PersonSchema
};
