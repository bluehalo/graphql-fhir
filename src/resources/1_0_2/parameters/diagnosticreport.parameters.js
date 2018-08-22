const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the diagnosticreport query
 */
module.exports = {
	result: {
		type: GraphQLString,
		description: 'Link to an atomic result (observation resource). See http://hl7.org/fhir/SearchParameter/diagnosticreport-result.'
	},
	status: {
		type: TokenScalar,
		description: 'The status of the report. See http://hl7.org/fhir/SearchParameter/diagnosticreport-status.'
	},
	subject: {
		type: GraphQLString,
		description: 'The subject of the report. See http://hl7.org/fhir/SearchParameter/diagnosticreport-subject.'
	},
	issued: {
		type: DateScalar,
		description: 'When the report was issued. See http://hl7.org/fhir/SearchParameter/diagnosticreport-issued.'
	},
	diagnosis: {
		type: TokenScalar,
		description: 'A coded diagnosis on the report. See http://hl7.org/fhir/SearchParameter/diagnosticreport-diagnosis.'
	},
	image: {
		type: GraphQLString,
		description: 'A reference to the image source. See http://hl7.org/fhir/SearchParameter/diagnosticreport-image.'
	},
	encounter: {
		type: GraphQLString,
		description: 'The Encounter when the order was made. See http://hl7.org/fhir/SearchParameter/diagnosticreport-encounter.'
	},
	code: {
		type: TokenScalar,
		description: 'The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result. See http://hl7.org/fhir/SearchParameter/diagnosticreport-code.'
	},
	date: {
		type: DateScalar,
		description: 'The clinically relevant time of the report. See http://hl7.org/fhir/SearchParameter/diagnosticreport-date.'
	},
	category: {
		type: TokenScalar,
		description: 'Which diagnostic discipline/department created the report. See http://hl7.org/fhir/SearchParameter/diagnosticreport-category.'
	},
	patient: {
		type: GraphQLString,
		description: 'The subject of the report if a patient. See http://hl7.org/fhir/SearchParameter/diagnosticreport-patient.'
	},
	request: {
		type: GraphQLString,
		description: 'Reference to the test or procedure request. See http://hl7.org/fhir/SearchParameter/diagnosticreport-request.'
	},
	specimen: {
		type: GraphQLString,
		description: 'The specimen details. See http://hl7.org/fhir/SearchParameter/diagnosticreport-specimen.'
	},
	performer: {
		type: GraphQLString,
		description: 'Who was the source of the report (organization). See http://hl7.org/fhir/SearchParameter/diagnosticreport-performer.'
	},
	identifier: {
		type: TokenScalar,
		description: 'An identifier for the report. See http://hl7.org/fhir/SearchParameter/diagnosticreport-identifier.'
	}
};
