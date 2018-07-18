// Schemas
const LinkageSchema = require('../../schemas/linkage.schema');

// Arguments
const LinkageArgs = require('../../parameters/linkage.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	linkageResolver,
	linkageListResolver,
	linkageInstanceResolver
} = require('./resolver');

/**
 * @name exports.LinkageQuery
 * @summary Linkage Query.
 */
module.exports.LinkageQuery = {
	args: Object.assign({}, CommonArgs, LinkageArgs),
	description: 'Query for a single Linkage',
	resolve: linkageResolver,
	type: LinkageSchema
};

/**
 * @name exports.LinkageListQuery
 * @summary LinkageList Query.
 */
module.exports.LinkageListQuery = {
	args: Object.assign({}, CommonArgs, LinkageArgs),
	description: 'Query for multiple Linkages',
	resolve: linkageListResolver,
	type: new GraphQLList(LinkageSchema)
};

/**
 * @name exports.LinkageInstanceQuery
 * @summary LinkageInstance Query.
 */
module.exports.LinkageInstanceQuery = {
	description: 'Get information about a single Linkage',
	resolve: linkageInstanceResolver,
	type: LinkageSchema
};
