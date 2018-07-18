// Schemas
const ImmunizationSchema = require('../../schemas/immunization.schema');

// Arguments
const ImmunizationArgs = require('../../parameters/immunization.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	immunizationResolver,
	immunizationListResolver,
	immunizationInstanceResolver
} = require('./resolver');

/**
 * @name exports.ImmunizationQuery
 * @summary Immunization Query.
 */
module.exports.ImmunizationQuery = {
	args: Object.assign({}, CommonArgs, ImmunizationArgs),
	description: 'Query for a single Immunization',
	resolve: immunizationResolver,
	type: ImmunizationSchema
};

/**
 * @name exports.ImmunizationListQuery
 * @summary ImmunizationList Query.
 */
module.exports.ImmunizationListQuery = {
	args: Object.assign({}, CommonArgs, ImmunizationArgs),
	description: 'Query for multiple Immunizations',
	resolve: immunizationListResolver,
	type: new GraphQLList(ImmunizationSchema)
};

/**
 * @name exports.ImmunizationInstanceQuery
 * @summary ImmunizationInstance Query.
 */
module.exports.ImmunizationInstanceQuery = {
	description: 'Get information about a single Immunization',
	resolve: immunizationInstanceResolver,
	type: ImmunizationSchema
};
