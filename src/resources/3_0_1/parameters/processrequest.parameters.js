const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the processrequest query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ProcessRequest-action
	action: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcessRequest.action',
		description: 'The action requested by this resource',
	},
	// http://hl7.org/fhir/SearchParameter/ProcessRequest-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ProcessRequest.identifier',
		description: 'The business identifier of the ProcessRequest',
	},
	// http://hl7.org/fhir/SearchParameter/ProcessRequest-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcessRequest.organization',
		description: 'The organization who generated this request',
	},
	// http://hl7.org/fhir/SearchParameter/ProcessRequest-provider
	provider: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ProcessRequest.provider',
		description: 'The provider who regenerated this request',
	},
};
