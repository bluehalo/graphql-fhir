// Schemas
const RelatedPersonSchema = require('../../schemas/relatedperson.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const RelatedPersonArgs = require('../../parameters/relatedperson.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	relatedpersonResolver,
	relatedpersonListResolver,
	relatedpersonInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'RelatedPerson',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.RelatedPersonQuery
 * @summary RelatedPerson Query.
 */
module.exports.RelatedPersonQuery = {
	args: Object.assign({}, CommonArgs, RelatedPersonArgs),
	description: 'Query for a single RelatedPerson',
	resolve: scopeInvariant(scopeOptions, relatedpersonResolver),
	type: RelatedPersonSchema
};

/**
 * @name exports.RelatedPersonListQuery
 * @summary RelatedPersonList Query.
 */
module.exports.RelatedPersonListQuery = {
	args: Object.assign({}, CommonArgs, RelatedPersonArgs),
	description: 'Query for multiple RelatedPersons',
	resolve: scopeInvariant(scopeOptions, relatedpersonListResolver),
	type: BundleSchema
};

/**
 * @name exports.RelatedPersonInstanceQuery
 * @summary RelatedPersonInstance Query.
 */
module.exports.RelatedPersonInstanceQuery = {
	description: 'Get information about a single RelatedPerson',
	resolve: scopeInvariant(scopeOptions, relatedpersonInstanceResolver),
	type: RelatedPersonSchema
};
