// Schemas
const OperationOutcome = require('../../inputs/operationoutcome.input.js');
const ObservationSchema = require('../../schemas/observation.schema.js');
const BundleSchema = require('../../schemas/bundle.schema.js');

// Arguments
const ObservationArgs = require('../../parameters/observation.parameters.js');
const ResourceArgs = require('../../parameters/resource.parameters.js');
const DomainResourceArgs = require('../../parameters/domainresource.parameters.js');

let args = Object.assign({}, DomainResourceArgs, ResourceArgs, ObservationArgs);

// Resolvers
const {
	getObservation,
	getObservationList,
	getObservationInstance,
} = require('./resolver');

// Scope Utilities
const scopeInvariant = require('@asymmetrik/sof-graphql-invariant');

let scopeOptions = {
	schema: OperationOutcome,
	name: 'Observation',
	action: 'read',
};

/**
 * @name exports.ObservationQuery
 * @summary Observation query.
 */
module.exports.ObservationQuery = {
	description: 'Query for a single Observation',
	resolve: scopeInvariant(scopeOptions, getObservation),
	type: ObservationSchema,
	args: args,
};

/**
 * @name exports.ObservationListQuery
 * @summary Observation query.
 */
module.exports.ObservationListQuery = {
	description: 'Query for a more than or just one Observation',
	resolve: scopeInvariant(scopeOptions, getObservationList),
	type: BundleSchema,
	args: args,
};

/**
 * @name exports.ObservationInstanceQuery
 * @summary Observation query.
 */
module.exports.ObservationInstanceQuery = {
	description: 'Access information about a single Observation',
	resolve: scopeInvariant(scopeOptions, getObservationInstance),
	type: ObservationSchema,
	args: args,
};
