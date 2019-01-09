const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the examplescenario query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-context
	context: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExampleScenario.useContext.valueCodeableConcept',
		description: 'A use context assigned to the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-context-quantity
	context_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'ExampleScenario.useContext.valueQuantity',
		description:
			'A quantity- or range-valued use context assigned to the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-context-type
	context_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExampleScenario.useContext.code',
		description: 'A type of use context assigned to the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ExampleScenario.date',
		description: 'The example scenario publication date',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExampleScenario.identifier',
		description: 'External identifier for the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-jurisdiction
	jurisdiction: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExampleScenario.jurisdiction',
		description: 'Intended jurisdiction for the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ExampleScenario.name',
		description: 'Computationally friendly name of the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-publisher
	publisher: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'ExampleScenario.publisher',
		description: 'Name of the publisher of the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExampleScenario.status',
		description: 'The current status of the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'ExampleScenario.url',
		description: 'The uri that identifies the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-version
	version: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ExampleScenario.version',
		description: 'The business version of the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-context-type-quantity
	context_type_quantity: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and quantity- or range-based value assigned to the example scenario',
	},
	// http://hl7.org/fhir/SearchParameter/ExampleScenario-context-type-value
	context_type_value: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A use context type and value assigned to the example scenario',
	},
};
