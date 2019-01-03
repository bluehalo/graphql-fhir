const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the messagedefinition query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'The message definition publication date (See http://hl7.org/fhir/SearchParameter/MessageDefinition-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'External identifier for the message definition (See http://hl7.org/fhir/SearchParameter/MessageDefinition-identifier).',
	},
	jurisdiction: {
		type: TokenScalar,
		description:
			'Intended jurisdiction for the message definition (See http://hl7.org/fhir/SearchParameter/MessageDefinition-jurisdiction).',
	},
	description: {
		type: GraphQLString,
		description:
			'The description of the message definition (See http://hl7.org/fhir/SearchParameter/MessageDefinition-description).',
	},
	focus: {
		type: TokenScalar,
		description:
			'A resource that is a permitted focus of the message (See http://hl7.org/fhir/SearchParameter/MessageDefinition-focus).',
	},
	title: {
		type: GraphQLString,
		description:
			'The human-friendly name of the message definition (See http://hl7.org/fhir/SearchParameter/MessageDefinition-title).',
	},
	version: {
		type: TokenScalar,
		description:
			'The business version of the message definition (See http://hl7.org/fhir/SearchParameter/MessageDefinition-version).',
	},
	url: {
		type: UriScalar,
		description:
			'The uri that identifies the message definition (See http://hl7.org/fhir/SearchParameter/MessageDefinition-url).',
	},
	name: {
		type: GraphQLString,
		description:
			'Computationally friendly name of the message definition (See http://hl7.org/fhir/SearchParameter/MessageDefinition-name).',
	},
	publisher: {
		type: GraphQLString,
		description:
			'Name of the publisher of the message definition (See http://hl7.org/fhir/SearchParameter/MessageDefinition-publisher).',
	},
	event: {
		type: TokenScalar,
		description:
			'The event that triggers the message (See http://hl7.org/fhir/SearchParameter/MessageDefinition-event).',
	},
	category: {
		type: TokenScalar,
		description:
			'The behavior associated with the message (See http://hl7.org/fhir/SearchParameter/MessageDefinition-category).',
	},
	status: {
		type: TokenScalar,
		description:
			'The current status of the message definition (See http://hl7.org/fhir/SearchParameter/MessageDefinition-status).',
	},
};
