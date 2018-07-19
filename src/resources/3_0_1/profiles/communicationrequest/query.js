// Schemas
const CommunicationRequestSchema = require('../../schemas/communicationrequest.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const CommunicationRequestArgs = require('../../parameters/communicationrequest.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	communicationrequestResolver,
	communicationrequestListResolver,
	communicationrequestInstanceResolver
} = require('./resolver');

/**
 * @name exports.CommunicationRequestQuery
 * @summary CommunicationRequest Query.
 */
module.exports.CommunicationRequestQuery = {
	args: Object.assign({}, CommonArgs, CommunicationRequestArgs),
	description: 'Query for a single CommunicationRequest',
	resolve: communicationrequestResolver,
	type: CommunicationRequestSchema
};

/**
 * @name exports.CommunicationRequestListQuery
 * @summary CommunicationRequestList Query.
 */
module.exports.CommunicationRequestListQuery = {
	args: Object.assign({}, CommonArgs, CommunicationRequestArgs),
	description: 'Query for multiple CommunicationRequests',
	resolve: communicationrequestListResolver,
	type: BundleSchema
};

/**
 * @name exports.CommunicationRequestInstanceQuery
 * @summary CommunicationRequestInstance Query.
 */
module.exports.CommunicationRequestInstanceQuery = {
	description: 'Get information about a single CommunicationRequest',
	resolve: communicationrequestInstanceResolver,
	type: CommunicationRequestSchema
};
