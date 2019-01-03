// Schemas
const CommunicationRequestSchema = require('../../schemas/communicationrequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CommunicationRequestArgs = require('../../parameters/communicationrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	communicationrequestResolver,
	communicationrequestListResolver,
	communicationrequestInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'CommunicationRequest',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.CommunicationRequestQuery
 * @summary CommunicationRequest Query.
 */
module.exports.CommunicationRequestQuery = {
	args: Object.assign({}, CommonArgs, CommunicationRequestArgs),
	description: 'Query for a single CommunicationRequest',
	resolve: scopeInvariant(scopeOptions, communicationrequestResolver),
	type: CommunicationRequestSchema,
};

/**
 * @name exports.CommunicationRequestListQuery
 * @summary CommunicationRequestList Query.
 */
module.exports.CommunicationRequestListQuery = {
	args: Object.assign({}, CommonArgs, CommunicationRequestArgs),
	description: 'Query for multiple CommunicationRequests',
	resolve: scopeInvariant(scopeOptions, communicationrequestListResolver),
	type: BundleSchema,
};

/**
 * @name exports.CommunicationRequestInstanceQuery
 * @summary CommunicationRequestInstance Query.
 */
module.exports.CommunicationRequestInstanceQuery = {
	description: 'Get information about a single CommunicationRequest',
	resolve: scopeInvariant(scopeOptions, communicationrequestInstanceResolver),
	type: CommunicationRequestSchema,
};
