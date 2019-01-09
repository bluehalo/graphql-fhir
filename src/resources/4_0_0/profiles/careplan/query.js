// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const CarePlanSchema = require('../../schemas/careplan.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const CarePlanArgs = require('../../parameters/careplan.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, CarePlanArgs);

// Resolvers
const {
	getCarePlan,
	getCarePlanList,
	getCarePlanInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'CarePlan',
	action: 'read',
};

/**
 * @name exports.CarePlanQuery
 * @summary CarePlan query.
 */
module.exports.CarePlanQuery = {
	description: 'Query for a single CarePlan',
	resolve: scopeInvariant(scopeOptions, getCarePlan),
	type: CarePlanSchema,
	args: args,
};

/**
 * @name exports.CarePlanListQuery
 * @summary CarePlan query.
 */
module.exports.CarePlanListQuery = {
	description: 'Query for a more than or just one CarePlan',
	resolve: scopeInvariant(scopeOptions, getCarePlanList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.CarePlanInstanceQuery
 * @summary CarePlan query.
 */
module.exports.CarePlanInstanceQuery = {
	description: 'Access information about a single CarePlan',
	resolve: scopeInvariant(scopeOptions, getCarePlanInstance),
	type: CarePlanSchema,
	args: args,
};
