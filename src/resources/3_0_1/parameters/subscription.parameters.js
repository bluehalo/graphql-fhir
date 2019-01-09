const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the subscription query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Subscription-add-tag
	add_tag: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Subscription.tag',
		description: 'A tag to be added to the resource matching the criteria',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-contact
	contact: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Subscription.contact',
		description: 'Contact details for the subscription',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-criteria
	criteria: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Subscription.criteria',
		description:
			'The search rules used to determine when to send a notification',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-payload
	payload: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Subscription.channel.payload',
		description: 'The mime-type of the notification payload',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Subscription.status',
		description: 'The current state of the subscription',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Subscription.channel.type',
		description: 'The type of channel for the sent notifications',
	},
	// http://hl7.org/fhir/SearchParameter/Subscription-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'Subscription.channel.endpoint',
		description: 'The uri that will receive the notifications',
	},
};
