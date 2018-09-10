const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the measurereport query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'External identifier of the measure report to be returned (See http://hl7.org/fhir/SearchParameter/MeasureReport-identifier).'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a patient to search for individual measure report results for (See http://hl7.org/fhir/SearchParameter/MeasureReport-patient).'
	},
	status: {
		type: TokenScalar,
		description: 'The status of the measure report (See http://hl7.org/fhir/SearchParameter/MeasureReport-status).'
	}
};
