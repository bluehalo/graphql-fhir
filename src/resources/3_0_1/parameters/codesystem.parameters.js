const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the codesystem query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/CodeSystem-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CodeSystem.concept.code',
		description: 'A code defined in the code system',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-content-mode
	content_mode: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CodeSystem.content',
		description: 'not-present | example | fragment | complete',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CodeSystem.date',
		description: 'The code system publication date',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CodeSystem.description',
		description: 'The description of the code system',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CodeSystem.identifier',
		description: 'External identifier for the code system',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CodeSystem.jurisdiction',
		description: 'Intended jurisdiction for the code system',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-language
	language: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CodeSystem.concept.designation.language',
		description: 'A language in which a designation is provided',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CodeSystem.name',
		description: 'Computationally friendly name of the code system',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CodeSystem.publisher',
		description: 'Name of the publisher of the code system',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CodeSystem.status',
		description: 'The current status of the code system',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-system
	system: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'CodeSystem.url',
		description:
			"The system for any codes defined by this code system (same as 'url')",
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'CodeSystem.title',
		description: 'The human-friendly name of the code system',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'CodeSystem.url',
		description: 'The uri that identifies the code system',
	},
	// http://hl7.org/fhir/SearchParameter/CodeSystem-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CodeSystem.version',
		description: 'The business version of the code system',
	},
};
