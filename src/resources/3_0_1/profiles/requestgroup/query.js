// Schemas
const RequestGroupSchema = require('../../schemas/requestgroup.schema');

// Arguments
const RequestGroupArgs = require('../../parameters/requestgroup.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	requestgroupResolver,
	requestgroupListResolver,
	requestgroupInstanceResolver
} = require('./resolver');

/**
 * @name exports.RequestGroupQuery
 * @summary RequestGroup Query.
 */
module.exports.RequestGroupQuery = {
	args: Object.assign({}, CommonArgs, RequestGroupArgs),
	description: 'Query for a single RequestGroup',
	resolve: requestgroupResolver,
	type: RequestGroupSchema
};

/**
 * @name exports.RequestGroupListQuery
 * @summary RequestGroupList Query.
 */
module.exports.RequestGroupListQuery = {
	args: Object.assign({}, CommonArgs, RequestGroupArgs),
	description: 'Query for multiple RequestGroups',
	resolve: requestgroupListResolver,
	type: new GraphQLList(RequestGroupSchema)
};

/**
 * @name exports.RequestGroupInstanceQuery
 * @summary RequestGroupInstance Query.
 */
module.exports.RequestGroupInstanceQuery = {
	description: 'Get information about a single RequestGroup',
	resolve: requestgroupInstanceResolver,
	type: RequestGroupSchema
};
