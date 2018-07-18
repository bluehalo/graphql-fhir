// Schemas
const ProcedureSchema = require('../../schemas/procedure.schema');

// Arguments
const ProcedureArgs = require('../../parameters/procedure.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	procedureResolver,
	procedureListResolver,
	procedureInstanceResolver
} = require('./resolver');

/**
 * @name exports.ProcedureQuery
 * @summary Procedure Query.
 */
module.exports.ProcedureQuery = {
	args: Object.assign({}, CommonArgs, ProcedureArgs),
	description: 'Query for a single Procedure',
	resolve: procedureResolver,
	type: ProcedureSchema
};

/**
 * @name exports.ProcedureListQuery
 * @summary ProcedureList Query.
 */
module.exports.ProcedureListQuery = {
	args: Object.assign({}, CommonArgs, ProcedureArgs),
	description: 'Query for multiple Procedures',
	resolve: procedureListResolver,
	type: new GraphQLList(ProcedureSchema)
};

/**
 * @name exports.ProcedureInstanceQuery
 * @summary ProcedureInstance Query.
 */
module.exports.ProcedureInstanceQuery = {
	description: 'Get information about a single Procedure',
	resolve: procedureInstanceResolver,
	type: ProcedureSchema
};
