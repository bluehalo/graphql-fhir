const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the testscript query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/TestScript-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'TestScript.date',
		description: 'The test script publication date',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestScript.description',
		description: 'The description of the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'TestScript.identifier',
		description: 'External identifier for the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'TestScript.jurisdiction',
		description: 'Intended jurisdiction for the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestScript.name',
		description: 'Computationally friendly name of the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestScript.publisher',
		description: 'Name of the publisher of the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'TestScript.status',
		description: 'The current status of the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-testscript-capability
	testscript_capability: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestScript.metadata.capability.description',
		description: 'TestScript required and validated capability',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-title
	title: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestScript.title',
		description: 'The human-friendly name of the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'TestScript.url',
		description: 'The uri that identifies the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'TestScript.version',
		description: 'The business version of the test script',
	},
};
