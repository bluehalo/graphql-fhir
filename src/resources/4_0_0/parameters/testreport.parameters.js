const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the testreport query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/TestReport-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'TestReport.identifier',
		description: 'An external identifier for the test report',
	},
	// http://hl7.org/fhir/SearchParameter/TestReport-issued
	issued: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'TestReport.issued',
		description: 'The test report generation date',
	},
	// http://hl7.org/fhir/SearchParameter/TestReport-participant
	participant: {
		type: UriScalar,
		fhirtype: 'uri',
		xpath: 'TestReport.participant.uri',
		description: 'The reference to a participant in the test execution',
	},
	// http://hl7.org/fhir/SearchParameter/TestReport-result
	result: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'TestReport.result',
		description: 'The result disposition of the test execution',
	},
	// http://hl7.org/fhir/SearchParameter/TestReport-tester
	tester: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'TestReport.tester',
		description: 'The name of the testing organization',
	},
	// http://hl7.org/fhir/SearchParameter/TestReport-testscript
	testscript: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'TestReport.testScript',
		description: 'The test script executed to produce this report',
	},
};
