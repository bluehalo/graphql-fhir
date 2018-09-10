const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the testscript query
 */
module.exports = {
	testscript_test_capability: {
		type: GraphQLString,
		description: 'TestScript test required and validated capability (See http://hl7.org/fhir/SearchParameter/testscript-testscript-test-capability).'
	},
	testscript_setup_capability: {
		type: GraphQLString,
		description: 'TestScript setup required and validated capability (See http://hl7.org/fhir/SearchParameter/testscript-testscript-setup-capability).'
	},
	description: {
		type: GraphQLString,
		description: 'Natural language description of the TestScript (See http://hl7.org/fhir/SearchParameter/testscript-description).'
	},
	name: {
		type: GraphQLString,
		description: 'Informal name for this TestScript (See http://hl7.org/fhir/SearchParameter/testscript-name).'
	},
	testscript_capability: {
		type: GraphQLString,
		description: 'TestScript required and validated capability (See http://hl7.org/fhir/SearchParameter/testscript-testscript-capability).'
	},
	identifier: {
		type: TokenScalar,
		description: 'External identifier (See http://hl7.org/fhir/SearchParameter/testscript-identifier).'
	},
	url: {
		type: UriScalar,
		description: 'Absolute URL used to reference this TestScript (See http://hl7.org/fhir/SearchParameter/testscript-url).'
	}
};
