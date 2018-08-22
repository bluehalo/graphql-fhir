// Schemas
const SequenceSchema = require('../../schemas/sequence.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const SequenceArgs = require('../../parameters/sequence.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	sequenceResolver,
	sequenceListResolver,
	sequenceInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Sequence',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.SequenceQuery
 * @summary Sequence Query.
 */
module.exports.SequenceQuery = {
	args: Object.assign({}, CommonArgs, SequenceArgs),
	description: 'Query for a single Sequence',
	resolve: scopeInvariant(scopeOptions, sequenceResolver),
	type: SequenceSchema
};

/**
 * @name exports.SequenceListQuery
 * @summary SequenceList Query.
 */
module.exports.SequenceListQuery = {
	args: Object.assign({}, CommonArgs, SequenceArgs),
	description: 'Query for multiple Sequences',
	resolve: scopeInvariant(scopeOptions, sequenceListResolver),
	type: BundleSchema
};

/**
 * @name exports.SequenceInstanceQuery
 * @summary SequenceInstance Query.
 */
module.exports.SequenceInstanceQuery = {
	description: 'Get information about a single Sequence',
	resolve: scopeInvariant(scopeOptions, sequenceInstanceResolver),
	type: SequenceSchema
};
