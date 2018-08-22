const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the subscription query
 */
module.exports = {
	criteria: {
		type: GraphQLString,
		description: 'Rule for server push criteria. See http://hl7.org/fhir/SearchParameter/subscription-criteria.'
	},
	status: {
		type: TokenScalar,
		description: 'requested | active | error | off. See http://hl7.org/fhir/SearchParameter/subscription-status.'
	},
	tag: {
		type: TokenScalar,
		description: 'A tag to add to matching resources. See http://hl7.org/fhir/SearchParameter/subscription-tag.'
	},
	payload: {
		type: GraphQLString,
		description: 'Mimetype to send, or blank for no payload. See http://hl7.org/fhir/SearchParameter/subscription-payload.'
	},
	type: {
		type: TokenScalar,
		description: 'rest-hook | websocket | email | sms | message. See http://hl7.org/fhir/SearchParameter/subscription-type.'
	},
	contact: {
		type: TokenScalar,
		description: 'Contact details for source (e.g. troubleshooting). See http://hl7.org/fhir/SearchParameter/subscription-contact.'
	},
	url: {
		type: UriScalar,
		description: 'Where the channel points to. See http://hl7.org/fhir/SearchParameter/subscription-url.'
	}
};
