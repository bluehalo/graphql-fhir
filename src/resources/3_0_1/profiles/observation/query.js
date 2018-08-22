// Schemas
const ObservationSchema = require('../../schemas/observation.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ObservationArgs = require('../../parameters/observation.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	observationResolver,
	observationListResolver,
	observationInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Observation',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.ObservationQuery
 * @summary Observation Query.
 */
module.exports.ObservationQuery = {
	args: Object.assign({}, CommonArgs, ObservationArgs),
	description: 'Query for a single Observation',
	resolve: scopeInvariant(scopeOptions, observationResolver),
	type: ObservationSchema
};

/**
 * @name exports.ObservationListQuery
 * @summary ObservationList Query.
 */
module.exports.ObservationListQuery = {
	args: Object.assign({}, CommonArgs, ObservationArgs),
	description: 'Query for multiple Observations',
	resolve: scopeInvariant(scopeOptions, observationListResolver),
	type: BundleSchema
};

/**
 * @name exports.ObservationInstanceQuery
 * @summary ObservationInstance Query.
 */
module.exports.ObservationInstanceQuery = {
	description: 'Get information about a single Observation',
	resolve: scopeInvariant(scopeOptions, observationInstanceResolver),
	type: ObservationSchema
};
