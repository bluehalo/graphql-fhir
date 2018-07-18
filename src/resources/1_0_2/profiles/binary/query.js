// Schemas
const BinarySchema = require('../../schemas/binary.schema');

// Arguments
const BinaryArgs = require('../../parameters/binary.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	binaryResolver,
	binaryListResolver,
	binaryInstanceResolver
} = require('./resolver');

/**
 * @name exports.BinaryQuery
 * @summary Binary Query.
 */
module.exports.BinaryQuery = {
	args: Object.assign({}, CommonArgs, BinaryArgs),
	description: 'Query for a single Binary',
	resolve: binaryResolver,
	type: BinarySchema
};

/**
 * @name exports.BinaryListQuery
 * @summary BinaryList Query.
 */
module.exports.BinaryListQuery = {
	args: Object.assign({}, CommonArgs, BinaryArgs),
	description: 'Query for multiple Binarys',
	resolve: binaryListResolver,
	type: new GraphQLList(BinarySchema)
};

/**
 * @name exports.BinaryInstanceQuery
 * @summary BinaryInstance Query.
 */
module.exports.BinaryInstanceQuery = {
	description: 'Get information about a single Binary',
	resolve: binaryInstanceResolver,
	type: BinarySchema
};
