// Schemas
const ConsentSchema = require('../../schemas/consent.schema');

// Arguments
const ConsentArgs = require('../../parameters/consent.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	consentResolver,
	consentListResolver,
	consentInstanceResolver
} = require('./resolver');

/**
 * @name exports.ConsentQuery
 * @summary Consent Query.
 */
module.exports.ConsentQuery = {
	args: Object.assign({}, CommonArgs, ConsentArgs),
	description: 'Query for a single Consent',
	resolve: consentResolver,
	type: ConsentSchema
};

/**
 * @name exports.ConsentListQuery
 * @summary ConsentList Query.
 */
module.exports.ConsentListQuery = {
	args: Object.assign({}, CommonArgs, ConsentArgs),
	description: 'Query for multiple Consents',
	resolve: consentListResolver,
	type: new GraphQLList(ConsentSchema)
};

/**
 * @name exports.ConsentInstanceQuery
 * @summary ConsentInstance Query.
 */
module.exports.ConsentInstanceQuery = {
	description: 'Get information about a single Consent',
	resolve: consentInstanceResolver,
	type: ConsentSchema
};
