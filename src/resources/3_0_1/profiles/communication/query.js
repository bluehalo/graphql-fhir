// Schemas
const CommunicationSchema = require('../../schemas/communication.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CommunicationArgs = require('../../parameters/communication.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	communicationResolver,
	communicationListResolver,
	communicationInstanceResolver
} = require('./resolver');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'Communication',
	action: 'read',
	version: '3_0_1'
};

/**
 * @name exports.CommunicationQuery
 * @summary Communication Query.
 */
module.exports.CommunicationQuery = {
	args: Object.assign({}, CommonArgs, CommunicationArgs),
	description: 'Query for a single Communication',
	resolve: scopeInvariant(scopeOptions, communicationResolver),
	type: CommunicationSchema
};

/**
 * @name exports.CommunicationListQuery
 * @summary CommunicationList Query.
 */
module.exports.CommunicationListQuery = {
	args: Object.assign({}, CommonArgs, CommunicationArgs),
	description: 'Query for multiple Communications',
	resolve: scopeInvariant(scopeOptions, communicationListResolver),
	type: BundleSchema
};

/**
 * @name exports.CommunicationInstanceQuery
 * @summary CommunicationInstance Query.
 */
module.exports.CommunicationInstanceQuery = {
	description: 'Get information about a single Communication',
	resolve: scopeInvariant(scopeOptions, communicationInstanceResolver),
	type: CommunicationSchema
};
