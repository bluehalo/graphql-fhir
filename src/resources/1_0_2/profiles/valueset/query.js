// Schemas
const ValueSetSchema = require('../../schemas/valueset.schema');

// Arguments
const ValueSetArgs = require('../../parameters/valueset.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	valuesetResolver,
	valuesetListResolver,
	valuesetInstanceResolver
} = require('./resolver');

/**
 * @name exports.ValueSetQuery
 * @summary ValueSet Query.
 */
module.exports.ValueSetQuery = {
	args: Object.assign({}, CommonArgs, ValueSetArgs),
	description: 'Query for a single ValueSet',
	resolve: valuesetResolver,
	type: ValueSetSchema
};

/**
 * @name exports.ValueSetListQuery
 * @summary ValueSetList Query.
 */
module.exports.ValueSetListQuery = {
	args: Object.assign({}, CommonArgs, ValueSetArgs),
	description: 'Query for multiple ValueSets',
	resolve: valuesetListResolver,
	type: new GraphQLList(ValueSetSchema)
};

/**
 * @name exports.ValueSetInstanceQuery
 * @summary ValueSetInstance Query.
 */
module.exports.ValueSetInstanceQuery = {
	description: 'Get information about a single ValueSet',
	resolve: valuesetInstanceResolver,
	type: ValueSetSchema
};
