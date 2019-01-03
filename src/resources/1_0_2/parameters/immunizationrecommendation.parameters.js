const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the immunizationrecommendation query
 */
module.exports = {
	information: {
		type: GraphQLString,
		description:
			'Patient observations supporting recommendation (See http://hl7.org/fhir/SearchParameter/immunizationrecommendation-information).',
	},
	dose_sequence: {
		type: GraphQLString,
		description:
			'Dose number within sequence (See http://hl7.org/fhir/SearchParameter/immunizationrecommendation-dose-sequence).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who this profile is for (See http://hl7.org/fhir/SearchParameter/immunizationrecommendation-patient).',
	},
	support: {
		type: GraphQLString,
		description:
			'Past immunizations supporting recommendation (See http://hl7.org/fhir/SearchParameter/immunizationrecommendation-support).',
	},
	vaccine_type: {
		type: TokenScalar,
		description:
			'Vaccine recommendation applies to (See http://hl7.org/fhir/SearchParameter/immunizationrecommendation-vaccine-type).',
	},
	status: {
		type: TokenScalar,
		description:
			'Vaccine administration status (See http://hl7.org/fhir/SearchParameter/immunizationrecommendation-status).',
	},
	dose_number: {
		type: GraphQLString,
		description:
			'Recommended dose number (See http://hl7.org/fhir/SearchParameter/immunizationrecommendation-dose-number).',
	},
	date: {
		type: DateScalar,
		description:
			'Date recommendation created (See http://hl7.org/fhir/SearchParameter/immunizationrecommendation-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Business identifier (See http://hl7.org/fhir/SearchParameter/immunizationrecommendation-identifier).',
	},
};
