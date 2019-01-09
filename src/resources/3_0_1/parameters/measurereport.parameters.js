const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the measurereport query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MeasureReport-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MeasureReport.identifier',
		description: 'External identifier of the measure report to be returned',
	},
	// http://hl7.org/fhir/SearchParameter/MeasureReport-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MeasureReport.patient',
		description:
			'The identity of a patient to search for individual measure report results for',
	},
	// http://hl7.org/fhir/SearchParameter/MeasureReport-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MeasureReport.status',
		description: 'The status of the measure report',
	},
};
