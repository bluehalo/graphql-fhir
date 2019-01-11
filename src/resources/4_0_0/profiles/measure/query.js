// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const MeasureSchema = require('../../schemas/measure.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const MeasureArgs = require('../../parameters/measure.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, MeasureArgs);

// Resolvers
const {
	getMeasure,
	getMeasureList,
	getMeasureInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Measure',
	action: 'read',
};

/**
 * @name exports.MeasureQuery
 * @summary Measure query.
 */
module.exports.MeasureQuery = {
	description: 'Query for a single Measure',
	resolve: scopeInvariant(scopeOptions, getMeasure),
	type: MeasureSchema,
	args: args,
};

/**
 * @name exports.MeasureListQuery
 * @summary Measure query.
 */
module.exports.MeasureListQuery = {
	description: 'Query for a more than or just one Measure',
	resolve: scopeInvariant(scopeOptions, getMeasureList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.MeasureInstanceQuery
 * @summary Measure query.
 */
module.exports.MeasureInstanceQuery = {
	description: 'Access information about a single Measure',
	resolve: scopeInvariant(scopeOptions, getMeasureInstance),
	type: MeasureSchema,
	args: args,
};
