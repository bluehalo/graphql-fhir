const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the measurereport query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MeasureReport-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MeasureReport.date',
		description: 'The date of the measure report',
	},
	// http://hl7.org/fhir/SearchParameter/MeasureReport-evaluated-resource
	evaluated_resource: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MeasureReport.evaluatedResource',
		description: 'An evaluated resource referenced by the measure report',
	},
	// http://hl7.org/fhir/SearchParameter/MeasureReport-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MeasureReport.identifier',
		description: 'External identifier of the measure report to be returned',
	},
	// http://hl7.org/fhir/SearchParameter/MeasureReport-measure
	measure: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MeasureReport.measure',
		description: 'The measure to return measure report results for',
	},
	// http://hl7.org/fhir/SearchParameter/MeasureReport-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MeasureReport.subject',
		description:
			'The identity of a patient to search for individual measure report results for',
	},
	// http://hl7.org/fhir/SearchParameter/MeasureReport-period
	period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MeasureReport.period',
		description: 'The period of the measure report',
	},
	// http://hl7.org/fhir/SearchParameter/MeasureReport-reporter
	reporter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MeasureReport.reporter',
		description: 'The reporter to return measure report results for',
	},
	// http://hl7.org/fhir/SearchParameter/MeasureReport-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MeasureReport.status',
		description: 'The status of the measure report',
	},
	// http://hl7.org/fhir/SearchParameter/MeasureReport-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MeasureReport.subject',
		description:
			'The identity of a subject to search for individual measure report results for',
	},
};
