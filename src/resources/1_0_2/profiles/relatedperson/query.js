// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const RelatedPersonSchema = require('../../schemas/relatedperson.schema');

// Arguments
const RelatedPersonArgs = require('../../parameters/relatedperson.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	relatedpersonResolver,
	relatedpersonListResolver,
	relatedpersonInstanceResolver
} = require('./resolver');

/**
 * @name exports.RelatedPersonQuery
 * @summary RelatedPerson Query.
 */
module.exports.RelatedPersonQuery = {
	args: Object.assign({}, CommonArgs, RelatedPersonArgs),
	description: 'Query for a single RelatedPerson',
	resolve: relatedpersonResolver,
	type: RelatedPersonSchema
};

/**
 * @name exports.RelatedPersonListQuery
 * @summary RelatedPersonList Query.
 */
module.exports.RelatedPersonListQuery = {
	args: Object.assign({}, CommonArgs, RelatedPersonArgs),
	description: 'Query for multiple RelatedPersons',
	resolve: relatedpersonListResolver,
	type: BundleSchema
};

/**
 * @name exports.RelatedPersonInstanceQuery
 * @summary RelatedPersonInstance Query.
 */
module.exports.RelatedPersonInstanceQuery = {
	description: 'Get information about a single RelatedPerson',
	resolve: relatedpersonInstanceResolver,
	type: RelatedPersonSchema
};
