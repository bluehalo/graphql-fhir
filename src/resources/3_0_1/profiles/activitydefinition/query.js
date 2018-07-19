// Schemas
const ActivityDefinitionSchema = require('../../schemas/activitydefinition.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ActivityDefinitionArgs = require('../../parameters/activitydefinition.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	activitydefinitionResolver,
	activitydefinitionListResolver,
	activitydefinitionInstanceResolver
} = require('./resolver');

/**
 * @name exports.ActivityDefinitionQuery
 * @summary ActivityDefinition Query.
 */
module.exports.ActivityDefinitionQuery = {
	args: Object.assign({}, CommonArgs, ActivityDefinitionArgs),
	description: 'Query for a single ActivityDefinition',
	resolve: activitydefinitionResolver,
	type: ActivityDefinitionSchema
};

/**
 * @name exports.ActivityDefinitionListQuery
 * @summary ActivityDefinitionList Query.
 */
module.exports.ActivityDefinitionListQuery = {
	args: Object.assign({}, CommonArgs, ActivityDefinitionArgs),
	description: 'Query for multiple ActivityDefinitions',
	resolve: activitydefinitionListResolver,
	type: BundleSchema
};

/**
 * @name exports.ActivityDefinitionInstanceQuery
 * @summary ActivityDefinitionInstance Query.
 */
module.exports.ActivityDefinitionInstanceQuery = {
	description: 'Get information about a single ActivityDefinition',
	resolve: activitydefinitionInstanceResolver,
	type: ActivityDefinitionSchema
};
