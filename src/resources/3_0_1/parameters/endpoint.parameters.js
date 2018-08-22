const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the endpoint query
 */
module.exports = {
	payload_type: {
		type: TokenScalar,
		description: 'The type of content that may be used at this endpoint (e.g. XDS Discharge summaries). See http://hl7.org/fhir/SearchParameter/Endpoint-payload-type.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Identifies this endpoint across multiple systems. See http://hl7.org/fhir/SearchParameter/Endpoint-identifier.'
	},
	organization: {
		type: GraphQLString,
		description: 'The organization that is managing the endpoint. See http://hl7.org/fhir/SearchParameter/Endpoint-organization.'
	},
	connection_type: {
		type: TokenScalar,
		description: 'Protocol/Profile/Standard to be used with this endpoint connection. See http://hl7.org/fhir/SearchParameter/Endpoint-connection-type.'
	},
	name: {
		type: GraphQLString,
		description: 'A name that this endpoint can be identified by. See http://hl7.org/fhir/SearchParameter/Endpoint-name.'
	},
	status: {
		type: TokenScalar,
		description: 'The current status of the Endpoint (usually expected to be active). See http://hl7.org/fhir/SearchParameter/Endpoint-status.'
	}
};
