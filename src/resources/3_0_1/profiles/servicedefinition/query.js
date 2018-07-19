// Schemas
const ServiceDefinitionSchema = require('../../schemas/servicedefinition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ServiceDefinitionArgs = require('../../parameters/servicedefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	servicedefinitionResolver,
	servicedefinitionListResolver,
	servicedefinitionInstanceResolver
} = require('./resolver');

/**
 * @name exports.ServiceDefinitionQuery
 * @summary ServiceDefinition Query.
 */
module.exports.ServiceDefinitionQuery = {
	args: Object.assign({}, CommonArgs, ServiceDefinitionArgs),
	description: 'Query for a single ServiceDefinition',
	resolve: servicedefinitionResolver,
	type: ServiceDefinitionSchema
};

/**
 * @name exports.ServiceDefinitionListQuery
 * @summary ServiceDefinitionList Query.
 */
module.exports.ServiceDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, ServiceDefinitionArgs),
	description: 'Query for multiple ServiceDefinitions',
	resolve: servicedefinitionListResolver,
	type: BundleSchema
};

/**
 * @name exports.ServiceDefinitionInstanceQuery
 * @summary ServiceDefinitionInstance Query.
 */
module.exports.ServiceDefinitionInstanceQuery = {
	description: 'Get information about a single ServiceDefinition',
	resolve: servicedefinitionInstanceResolver,
	type: ServiceDefinitionSchema
};
