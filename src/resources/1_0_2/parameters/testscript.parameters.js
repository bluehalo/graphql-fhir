const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the testscript query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/TestScript-description
	description: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestScript.description',
		description: 'Natural language description of the TestScript',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'TestScript.identifier',
		description: 'External identifier',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestScript.name',
		description: 'Informal name for this TestScript',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-testscript-capability
	testscript_capability: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestScript.metadata.capability.description',
		description: 'TestScript required and validated capability',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-testscript-setup-capability
	testscript_setup_capability: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestScript.setup.metadata.capability.description',
		description: 'TestScript setup required and validated capability',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-testscript-test-capability
	testscript_test_capability: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestScript.test.metadata.capability.description',
		description: 'TestScript test required and validated capability',
	},
	// http://hl7.org/fhir/SearchParameter/TestScript-url
	url: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'TestScript.url',
		description: 'Absolute URL used to reference this TestScript',
	},
};
