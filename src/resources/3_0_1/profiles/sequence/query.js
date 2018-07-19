// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const SequenceSchema = require('../../schemas/sequence.schema');

// Arguments
const SequenceArgs = require('../../parameters/sequence.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	sequenceResolver,
	sequenceListResolver,
	sequenceInstanceResolver
} = require('./resolver');

/**
 * @name exports.SequenceQuery
 * @summary Sequence Query.
 */
module.exports.SequenceQuery = {
	args: Object.assign({}, CommonArgs, SequenceArgs),
	description: 'Query for a single Sequence',
	resolve: sequenceResolver,
	type: SequenceSchema
};

/**
 * @name exports.SequenceListQuery
 * @summary SequenceList Query.
 */
module.exports.SequenceListQuery = {
	args: Object.assign({}, CommonArgs, SequenceArgs),
	description: 'Query for multiple Sequences',
	resolve: sequenceListResolver,
	type: BundleSchema
};

/**
 * @name exports.SequenceInstanceQuery
 * @summary SequenceInstance Query.
 */
module.exports.SequenceInstanceQuery = {
	description: 'Get information about a single Sequence',
	resolve: sequenceInstanceResolver,
	type: SequenceSchema
};
