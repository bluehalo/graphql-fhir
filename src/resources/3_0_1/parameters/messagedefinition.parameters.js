const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the messagedefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MessageDefinition.category',
		description: 'The behavior associated with the message',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MessageDefinition.date',
		description: 'The message definition publication date',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'MessageDefinition.description',
		description: 'The description of the message definition',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-event
	event: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MessageDefinition.event',
		description: 'The event that triggers the message',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-focus
	focus: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MessageDefinition.focus.code',
		description: 'A resource that is a permitted focus of the message',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MessageDefinition.identifier',
		description: 'External identifier for the message definition',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MessageDefinition.jurisdiction',
		description: 'Intended jurisdiction for the message definition',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'MessageDefinition.name',
		description: 'Computationally friendly name of the message definition',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'MessageDefinition.publisher',
		description: 'Name of the publisher of the message definition',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MessageDefinition.status',
		description: 'The current status of the message definition',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'MessageDefinition.title',
		description: 'The human-friendly name of the message definition',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'MessageDefinition.url',
		description: 'The uri that identifies the message definition',
	},
	// http://hl7.org/fhir/SearchParameter/MessageDefinition-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MessageDefinition.version',
		description: 'The business version of the message definition',
	},
};
