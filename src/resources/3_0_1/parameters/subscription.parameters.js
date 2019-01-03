const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the subscription query
 */
module.exports = {
	payload: {
		type: GraphQLString,
		description:
			'The mime-type of the notification payload (See http://hl7.org/fhir/SearchParameter/Subscription-payload).',
	},
	criteria: {
		type: GraphQLString,
		description:
			'The search rules used to determine when to send a notification (See http://hl7.org/fhir/SearchParameter/Subscription-criteria).',
	},
	add_tag: {
		type: TokenScalar,
		description:
			'A tag to be added to the resource matching the criteria (See http://hl7.org/fhir/SearchParameter/Subscription-add-tag).',
	},
	contact: {
		type: TokenScalar,
		description:
			'Contact details for the subscription (See http://hl7.org/fhir/SearchParameter/Subscription-contact).',
	},
	type: {
		type: TokenScalar,
		description:
			'The type of channel for the sent notifications (See http://hl7.org/fhir/SearchParameter/Subscription-type).',
	},
	url: {
		type: UriScalar,
		description:
			'The uri that will receive the notifications (See http://hl7.org/fhir/SearchParameter/Subscription-url).',
	},
	status: {
		type: TokenScalar,
		description:
			'The current state of the subscription (See http://hl7.org/fhir/SearchParameter/Subscription-status).',
	},
};
