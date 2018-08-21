// Schemas
const ActivityDefinitionSchema = require('../../schemas/activitydefinition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ActivityDefinitionArgs = require('../../parameters/activitydefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	activitydefinitionResolver,
	activitydefinitionListResolver,
	activitydefinitionInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ActivityDefinition',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.ActivityDefinitionQuery
 * @summary ActivityDefinition Query.
 */
module.exports.ActivityDefinitionQuery = {
	args: Object.assign({}, CommonArgs, ActivityDefinitionArgs),
	description: 'Query for a single ActivityDefinition',
	resolve: scopeInvariant(scopeOptions, activitydefinitionResolver),
	type: ActivityDefinitionSchema
};

/**
 * @name exports.ActivityDefinitionListQuery
 * @summary ActivityDefinitionList Query.
 */
module.exports.ActivityDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, ActivityDefinitionArgs),
	description: 'Query for multiple ActivityDefinitions',
	resolve: scopeInvariant(scopeOptions, activitydefinitionListResolver),
	type: BundleSchema
};

/**
 * @name exports.ActivityDefinitionInstanceQuery
 * @summary ActivityDefinitionInstance Query.
 */
module.exports.ActivityDefinitionInstanceQuery = {
	description: 'Get information about a single ActivityDefinition',
	resolve: scopeInvariant(scopeOptions, activitydefinitionInstanceResolver),
	type: ActivityDefinitionSchema
};
