// Schemas
const DocumentReferenceSchema = require('../../schemas/documentreference.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const DocumentReferenceArgs = require('../../parameters/documentreference.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	documentreferenceResolver,
	documentreferenceListResolver,
	documentreferenceInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DocumentReference',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.DocumentReferenceQuery
 * @summary DocumentReference Query.
 */
module.exports.DocumentReferenceQuery = {
	args: Object.assign({}, CommonArgs, DocumentReferenceArgs),
	description: 'Query for a single DocumentReference',
	resolve: scopeInvariant(scopeOptions, documentreferenceResolver),
	type: DocumentReferenceSchema
};

/**
 * @name exports.DocumentReferenceListQuery
 * @summary DocumentReferenceList Query.
 */
module.exports.DocumentReferenceListQuery = {
	args: Object.assign({}, CommonArgs, DocumentReferenceArgs),
	description: 'Query for multiple DocumentReferences',
	resolve: scopeInvariant(scopeOptions, documentreferenceListResolver),
	type: BundleSchema
};

/**
 * @name exports.DocumentReferenceInstanceQuery
 * @summary DocumentReferenceInstance Query.
 */
module.exports.DocumentReferenceInstanceQuery = {
	description: 'Get information about a single DocumentReference',
	resolve: scopeInvariant(scopeOptions, documentreferenceInstanceResolver),
	type: DocumentReferenceSchema
};
