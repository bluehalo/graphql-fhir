const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the immunizationrecommendation query
 */
module.exports = {
	date: {
		type: DateScalar,
		description:
			'Date recommendation created (See http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'Business identifier (See http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-identifier).',
	},
	dose_sequence: {
		type: GraphQLString,
		description:
			'Dose number within sequence (See http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-dose-sequence).',
	},
	target_disease: {
		type: TokenScalar,
		description:
			'Disease to be immunized against (See http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-target-disease).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who this profile is for (See http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-patient).',
	},
	vaccine_type: {
		type: TokenScalar,
		description:
			'Vaccine recommendation applies to (See http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-vaccine-type).',
	},
	dose_number: {
		type: GraphQLString,
		description:
			'Recommended dose number (See http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-dose-number).',
	},
	information: {
		type: GraphQLString,
		description:
			'Patient observations supporting recommendation (See http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-information).',
	},
	support: {
		type: GraphQLString,
		description:
			'Past immunizations supporting recommendation (See http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-support).',
	},
	status: {
		type: TokenScalar,
		description:
			'Vaccine administration status (See http://hl7.org/fhir/SearchParameter/ImmunizationRecommendation-status).',
	},
};
