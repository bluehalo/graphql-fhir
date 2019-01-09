const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the detectedissue query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DetectedIssue-author
	author: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DetectedIssue.author',
		description: 'The provider or device that identified the issue',
	},
	// http://hl7.org/fhir/SearchParameter/DetectedIssue-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DetectedIssue.category',
		description: 'Issue Category, e.g. drug-drug, duplicate therapy, etc.',
	},
	// http://hl7.org/fhir/SearchParameter/DetectedIssue-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DetectedIssue.date',
		description: 'When identified',
	},
	// http://hl7.org/fhir/SearchParameter/DetectedIssue-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DetectedIssue.identifier',
		description: 'Unique id for the detected issue',
	},
	// http://hl7.org/fhir/SearchParameter/DetectedIssue-implicated
	implicated: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DetectedIssue.implicated',
		description: 'Problem resource',
	},
	// http://hl7.org/fhir/SearchParameter/DetectedIssue-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DetectedIssue.patient',
		description: 'Associated patient',
	},
};
