// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const DocumentReferenceSchema = require('../../schemas/documentreference.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const DocumentReferenceArgs = require('../../parameters/documentreference.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign(
	{},
	DomainResourceArgs,
	ResourceArgs,
	DocumentReferenceArgs,
);

// Resolvers
const {
	getDocumentReference,
	getDocumentReferenceList,
	getDocumentReferenceInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'DocumentReference',
	action: 'read',
};

/**
 * @name exports.DocumentReferenceQuery
 * @summary DocumentReference query.
 */
module.exports.DocumentReferenceQuery = {
	description: 'Query for a single DocumentReference',
	resolve: scopeInvariant(scopeOptions, getDocumentReference),
	type: DocumentReferenceSchema,
	args: args,
};

/**
 * @name exports.DocumentReferenceListQuery
 * @summary DocumentReference query.
 */
module.exports.DocumentReferenceListQuery = {
	description: 'Query for a more than or just one DocumentReference',
	resolve: scopeInvariant(scopeOptions, getDocumentReferenceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.DocumentReferenceInstanceQuery
 * @summary DocumentReference query.
 */
module.exports.DocumentReferenceInstanceQuery = {
	description: 'Access information about a single DocumentReference',
	resolve: scopeInvariant(scopeOptions, getDocumentReferenceInstance),
	type: DocumentReferenceSchema,
	args: args,
};
