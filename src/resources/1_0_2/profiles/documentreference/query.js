// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const DocumentReferenceSchema = require('../../schemas/documentreference.schema');

// Arguments
const DocumentReferenceArgs = require('../../parameters/documentreference.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	documentreferenceResolver,
	documentreferenceListResolver,
	documentreferenceInstanceResolver
} = require('./resolver');

/**
 * @name exports.DocumentReferenceQuery
 * @summary DocumentReference Query.
 */
module.exports.DocumentReferenceQuery = {
	args: Object.assign({}, CommonArgs, DocumentReferenceArgs),
	description: 'Query for a single DocumentReference',
	resolve: documentreferenceResolver,
	type: DocumentReferenceSchema
};

/**
 * @name exports.DocumentReferenceListQuery
 * @summary DocumentReferenceList Query.
 */
module.exports.DocumentReferenceListQuery = {
	args: Object.assign({}, CommonArgs, DocumentReferenceArgs),
	description: 'Query for multiple DocumentReferences',
	resolve: documentreferenceListResolver,
	type: BundleSchema
};

/**
 * @name exports.DocumentReferenceInstanceQuery
 * @summary DocumentReferenceInstance Query.
 */
module.exports.DocumentReferenceInstanceQuery = {
	description: 'Get information about a single DocumentReference',
	resolve: documentreferenceInstanceResolver,
	type: DocumentReferenceSchema
};
