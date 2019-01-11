const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the testscript query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/TestScript-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'TestScript.useContext.valueCodeableConcept',
		description: 'A use context assigned to the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'TestScript.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'TestScript.useContext.code',
		description: 'A type of use context assigned to the test script',
	},
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
	// http://hl7.org/fhir/SearchParameter/TestScript-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the test script',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description: 'A use context type and value assigned to the test script',
	},
};
