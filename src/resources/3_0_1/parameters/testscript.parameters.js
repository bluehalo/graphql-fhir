const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the testscript query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'The test script publication date (See http://hl7.org/fhir/SearchParameter/TestScript-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'External identifier for the test script (See http://hl7.org/fhir/SearchParameter/TestScript-identifier).',
	},
	jurisdiction: {
		type: TokenScalar,
		description:
			'Intended jurisdiction for the test script (See http://hl7.org/fhir/SearchParameter/TestScript-jurisdiction).',
	},
	name: {
		type: GraphQLString,
		description:
			'Computationally friendly name of the test script (See http://hl7.org/fhir/SearchParameter/TestScript-name).',
	},
	description: {
		type: GraphQLString,
		description:
			'The description of the test script (See http://hl7.org/fhir/SearchParameter/TestScript-description).',
	},
	publisher: {
		type: GraphQLString,
		description:
			'Name of the publisher of the test script (See http://hl7.org/fhir/SearchParameter/TestScript-publisher).',
	},
	testscript_capability: {
		type: GraphQLString,
		description:
			'TestScript required and validated capability (See http://hl7.org/fhir/SearchParameter/TestScript-testscript-capability).',
	},
	title: {
		type: GraphQLString,
		description:
			'The human-friendly name of the test script (See http://hl7.org/fhir/SearchParameter/TestScript-title).',
	},
	version: {
		type: TokenScalar,
		description:
			'The business version of the test script (See http://hl7.org/fhir/SearchParameter/TestScript-version).',
	},
	url: {
		type: UriScalar,
		description:
			'The uri that identifies the test script (See http://hl7.org/fhir/SearchParameter/TestScript-url).',
	},
	status: {
		type: TokenScalar,
		description:
			'The current status of the test script (See http://hl7.org/fhir/SearchParameter/TestScript-status).',
	},
};
