const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the diagnosticreport query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticReport.category',
		description: 'Which diagnostic discipline/department created the report',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticReport.code',
		description:
			'The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DiagnosticReport.effectiveDateTime',
		description: 'The clinically relevant time of the report',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-diagnosis
	diagnosis: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticReport.codedDiagnosis',
		description: 'A coded diagnosis on the report',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.encounter',
		description: 'The Encounter when the order was made',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticReport.identifier',
		description: 'An identifier for the report',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-image
	image: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.image.link',
		description: 'A reference to the image source.',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-issued
	issued: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'DiagnosticReport.issued',
		description: 'When the report was issued',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.subject',
		description: 'The subject of the report if a patient',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.performer',
		description: 'Who was the source of the report (organization)',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-request
	request: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.request',
		description: 'Reference to the test or procedure request.',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-result
	result: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.result',
		description: 'Link to an atomic result (observation resource)',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-specimen
	specimen: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.specimen',
		description: 'The specimen details',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DiagnosticReport.status',
		description: 'The status of the report',
	},
	// http://hl7.org/fhir/SearchParameter/DiagnosticReport-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DiagnosticReport.subject',
		description: 'The subject of the report',
	},
};
