// Schemas
const NamingSystemSchema = require('../../schemas/namingsystem.schema');

// Arguments
const NamingSystemArgs = require('../../parameters/namingsystem.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	namingsystemResolver,
	namingsystemListResolver,
	namingsystemInstanceResolver
} = require('./resolver');

/**
 * @name exports.NamingSystemQuery
 * @summary NamingSystem Query.
 */
module.exports.NamingSystemQuery = {
	args: Object.assign({}, CommonArgs, NamingSystemArgs),
	description: 'Query for a single NamingSystem',
	resolve: namingsystemResolver,
	type: NamingSystemSchema
};

/**
 * @name exports.NamingSystemListQuery
 * @summary NamingSystemList Query.
 */
module.exports.NamingSystemListQuery = {
	args: Object.assign({}, CommonArgs, NamingSystemArgs),
	description: 'Query for multiple NamingSystems',
	resolve: namingsystemListResolver,
	type: new GraphQLList(NamingSystemSchema)
};

/**
 * @name exports.NamingSystemInstanceQuery
 * @summary NamingSystemInstance Query.
 */
module.exports.NamingSystemInstanceQuery = {
	description: 'Get information about a single NamingSystem',
	resolve: namingsystemInstanceResolver,
	type: NamingSystemSchema
};
