const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the detectedissue query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'When identified (See http://hl7.org/fhir/SearchParameter/clinical-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Unique id for the detected issue (See http://hl7.org/fhir/SearchParameter/clinical-identifier).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Associated patient (See http://hl7.org/fhir/SearchParameter/clinical-patient).',
	},
	author: {
		type: GraphQLString,
		description:
			'The provider or device that identified the issue (See http://hl7.org/fhir/SearchParameter/DetectedIssue-author).',
	},
	implicated: {
		type: GraphQLString,
		description:
			'Problem resource (See http://hl7.org/fhir/SearchParameter/DetectedIssue-implicated).',
	},
	category: {
		type: TokenScalar,
		description:
			'Issue Category, e.g. drug-drug, duplicate therapy, etc. (See http://hl7.org/fhir/SearchParameter/DetectedIssue-category).',
	},
};
