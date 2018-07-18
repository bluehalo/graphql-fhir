// Schemas
const CompositionSchema = require('../../schemas/composition.schema');

// Arguments
const CompositionArgs = require('../../parameters/composition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	compositionResolver,
	compositionListResolver,
	compositionInstanceResolver
} = require('./resolver');

/**
 * @name exports.CompositionQuery
 * @summary Composition Query.
 */
module.exports.CompositionQuery = {
	args: Object.assign({}, CommonArgs, CompositionArgs),
	description: 'Query for a single Composition',
	resolve: compositionResolver,
	type: CompositionSchema
};

/**
 * @name exports.CompositionListQuery
 * @summary CompositionList Query.
 */
module.exports.CompositionListQuery = {
	args: Object.assign({}, CommonArgs, CompositionArgs),
	description: 'Query for multiple Compositions',
	resolve: compositionListResolver,
	type: new GraphQLList(CompositionSchema)
};

/**
 * @name exports.CompositionInstanceQuery
 * @summary CompositionInstance Query.
 */
module.exports.CompositionInstanceQuery = {
	description: 'Get information about a single Composition',
	resolve: compositionInstanceResolver,
	type: CompositionSchema
};
