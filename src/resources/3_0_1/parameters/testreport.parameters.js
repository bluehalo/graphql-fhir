const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the testreport query
 */
module.exports = {
	result: {
		type: TokenScalar,
		description:
			'The result disposition of the test execution (See http://hl7.org/fhir/SearchParameter/TestReport-result).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'An external identifier for the test report (See http://hl7.org/fhir/SearchParameter/TestReport-identifier).',
	},
	tester: {
		type: GraphQLString,
		description:
			'The name of the testing organization (See http://hl7.org/fhir/SearchParameter/TestReport-tester).',
	},
	testscript: {
		type: GraphQLString,
		description:
			'The test script executed to produce this report (See http://hl7.org/fhir/SearchParameter/TestReport-testscript).',
	},
	issued: {
		type: DateScalar,
		description:
			'The test report generation date (See http://hl7.org/fhir/SearchParameter/TestReport-issued).',
	},
	participant: {
		type: UriScalar,
		description:
			'The reference to a participant in the test execution (See http://hl7.org/fhir/SearchParameter/TestReport-participant).',
	},
};
