// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const SequenceSchema = require('../../schemas/sequence.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const SequenceArgs = require('../../parameters/sequence.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, SequenceArgs);

// Resolvers
const {
	getSequence,
	getSequenceList,
	getSequenceInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Sequence',
	action: 'read',
};

/**
 * @name exports.SequenceQuery
 * @summary Sequence query.
 */
module.exports.SequenceQuery = {
	description: 'Query for a single Sequence',
	resolve: scopeInvariant(scopeOptions, getSequence),
	type: SequenceSchema,
	args: args,
};

/**
 * @name exports.SequenceListQuery
 * @summary Sequence query.
 */
module.exports.SequenceListQuery = {
	description: 'Query for a more than or just one Sequence',
	resolve: scopeInvariant(scopeOptions, getSequenceList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.SequenceInstanceQuery
 * @summary Sequence query.
 */
module.exports.SequenceInstanceQuery = {
	description: 'Access information about a single Sequence',
	resolve: scopeInvariant(scopeOptions, getSequenceInstance),
	type: SequenceSchema,
	args: args,
};
