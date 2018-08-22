const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the diagnosticreport query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'The clinically relevant time of the report. See http://hl7.org/fhir/SearchParameter/clinical-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'An identifier for the report. See http://hl7.org/fhir/SearchParameter/clinical-identifier.'
	},
	image: {
		type: GraphQLString,
		description: 'A reference to the image source. See http://hl7.org/fhir/SearchParameter/DiagnosticReport-image.'
	},
	performer: {
		type: GraphQLString,
		description: 'Who was the source of the report (organization). See http://hl7.org/fhir/SearchParameter/DiagnosticReport-performer.'
	},
	code: {
		type: TokenScalar,
		description: 'The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result. See http://hl7.org/fhir/SearchParameter/clinical-code.'
	},
	subject: {
		type: GraphQLString,
		description: 'The subject of the report. See http://hl7.org/fhir/SearchParameter/DiagnosticReport-subject.'
	},
	diagnosis: {
		type: TokenScalar,
		description: 'A coded diagnosis on the report. See http://hl7.org/fhir/SearchParameter/DiagnosticReport-diagnosis.'
	},
	encounter: {
		type: GraphQLString,
		description: 'The Encounter when the order was made. See http://hl7.org/fhir/SearchParameter/clinical-encounter.'
	},
	result: {
		type: GraphQLString,
		description: 'Link to an atomic result (observation resource). See http://hl7.org/fhir/SearchParameter/DiagnosticReport-result.'
	},
	based_on: {
		type: GraphQLString,
		description: 'Reference to the procedure request. See http://hl7.org/fhir/SearchParameter/DiagnosticReport-based-on.'
	},
	patient: {
		type: GraphQLString,
		description: 'The subject of the report if a patient. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	specimen: {
		type: GraphQLString,
		description: 'The specimen details. See http://hl7.org/fhir/SearchParameter/DiagnosticReport-specimen.'
	},
	context: {
		type: GraphQLString,
		description: 'Healthcare event (Episode of Care or Encounter) related to the report. See http://hl7.org/fhir/SearchParameter/DiagnosticReport-context.'
	},
	issued: {
		type: DateScalar,
		description: 'When the report was issued. See http://hl7.org/fhir/SearchParameter/DiagnosticReport-issued.'
	},
	category: {
		type: TokenScalar,
		description: 'Which diagnostic discipline/department created the report. See http://hl7.org/fhir/SearchParameter/DiagnosticReport-category.'
	},
	status: {
		type: TokenScalar,
		description: 'The status of the report. See http://hl7.org/fhir/SearchParameter/DiagnosticReport-status.'
	}
};
