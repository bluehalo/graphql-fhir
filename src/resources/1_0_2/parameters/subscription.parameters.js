const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the subscription query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Subscription-contact
	contact: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Subscription.contact',
		description: 'Contact details for source (e.g. troubleshooting)',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-criteria
	criteria: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Subscription.criteria',
		description: 'Rule for server push criteria',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-payload
	payload: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Subscription.channel.payload',
		description: 'Mimetype to send, or blank for no payload',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Subscription.status',
		description: 'requested | active | error | off',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-tag
	tag: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Subscription.tag',
		description: 'A tag to add to matching resources',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Subscription.channel.type',
		description: 'rest-hook | websocket | email | sms | message',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Subscription.channel.endpoint',
		description: 'Where the channel points to',
	},
};
