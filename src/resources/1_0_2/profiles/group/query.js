// Schemas
const GroupSchema = require('../../schemas/group.schema');

// Arguments
const GroupArgs = require('../../parameters/group.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	groupResolver,
	groupListResolver,
	groupInstanceResolver
} = require('./resolver');

/**
 * @name exports.GroupQuery
 * @summary Group Query.
 */
module.exports.GroupQuery = {
	args: Object.assign({}, CommonArgs, GroupArgs),
	description: 'Query for a single Group',
	resolve: groupResolver,
	type: GroupSchema
};

/**
 * @name exports.GroupListQuery
 * @summary GroupList Query.
 */
module.exports.GroupListQuery = {
	args: Object.assign({}, CommonArgs, GroupArgs),
	description: 'Query for multiple Groups',
	resolve: groupListResolver,
	type: new GraphQLList(GroupSchema)
};

/**
 * @name exports.GroupInstanceQuery
 * @summary GroupInstance Query.
 */
module.exports.GroupInstanceQuery = {
	description: 'Get information about a single Group',
	resolve: groupInstanceResolver,
	type: GroupSchema
};
