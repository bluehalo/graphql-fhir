const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the endpoint query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Endpoint-connection-type
	connection_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Endpoint.connectionType',
		description:
			'Protocol/Profile/Standard to be used with this endpoint connection',
	},
	// http://hl7.org/fhir/SearchParameter/Endpoint-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Endpoint.identifier',
		description: 'Identifies this endpoint across multiple systems',
	},
	// http://hl7.org/fhir/SearchParameter/Endpoint-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Endpoint.name',
		description: 'A name that this endpoint can be identified by',
	},
	// http://hl7.org/fhir/SearchParameter/Endpoint-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Endpoint.managingOrganization',
		description: 'The organization that is managing the endpoint',
	},
	// http://hl7.org/fhir/SearchParameter/Endpoint-payload-type
	payload_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Endpoint.payloadType',
		description:
			'The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)',
	},
	// http://hl7.org/fhir/SearchParameter/Endpoint-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Endpoint.status',
		description:
			'The current status of the Endpoint (usually expected to be active)',
	},
};
