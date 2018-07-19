// Schemas
const BundleSchema = require('../schemas/bundle.schema');
const CommunicationSchema = require('../../schemas/communication.schema');

// Arguments
const CommunicationArgs = require('../../parameters/communication.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const {
	communicationResolver,
	communicationListResolver,
	communicationInstanceResolver
} = require('./resolver');

/**
 * @name exports.CommunicationQuery
 * @summary Communication Query.
 */
module.exports.CommunicationQuery = {
	args: Object.assign({}, CommonArgs, CommunicationArgs),
	description: 'Query for a single Communication',
	resolve: communicationResolver,
	type: CommunicationSchema
};

/**
 * @name exports.CommunicationListQuery
 * @summary CommunicationList Query.
 */
module.exports.CommunicationListQuery = {
	args: Object.assign({}, CommonArgs, CommunicationArgs),
	description: 'Query for multiple Communications',
	resolve: communicationListResolver,
	type: BundleSchema
};

/**
 * @name exports.CommunicationInstanceQuery
 * @summary CommunicationInstance Query.
 */
module.exports.CommunicationInstanceQuery = {
	description: 'Get information about a single Communication',
	resolve: communicationInstanceResolver,
	type: CommunicationSchema
};
