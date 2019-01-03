const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the allergyintolerance query
 */
module.exports = {
	severity: {
		type: TokenScalar,
		description:
			'mild | moderate | severe (of event as a whole) (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-severity).',
	},
	date: {
		type: DateScalar,
		description:
			'Date record was believed accurate (See http://hl7.org/fhir/SearchParameter/clinical-date).',
	},
	identifier: {
		type: TokenScalar,
		description:
			'External ids for this item (See http://hl7.org/fhir/SearchParameter/clinical-identifier).',
	},
	manifestation: {
		type: TokenScalar,
		description:
			'Clinical symptoms/signs associated with the Event (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-manifestation).',
	},
	recorder: {
		type: GraphQLString,
		description:
			'Who recorded the sensitivity (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-recorder).',
	},
	code: {
		type: TokenScalar,
		description:
			'Code that identifies the allergy or intolerance (See http://hl7.org/fhir/SearchParameter/clinical-code).',
	},
	verification_status: {
		type: TokenScalar,
		description:
			'unconfirmed | confirmed | refuted | entered-in-error (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-verification-status).',
	},
	criticality: {
		type: TokenScalar,
		description:
			'low | high | unable-to-assess (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-criticality).',
	},
	clinical_status: {
		type: TokenScalar,
		description:
			'active | inactive | resolved (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-clinical-status).',
	},
	type: {
		type: TokenScalar,
		description:
			'allergy | intolerance - Underlying mechanism (if known) (See http://hl7.org/fhir/SearchParameter/clinical-type).',
	},
	onset: {
		type: DateScalar,
		description:
			'Date(/time) when manifestations showed (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-onset).',
	},
	route: {
		type: TokenScalar,
		description:
			'How the subject was exposed to the substance (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-route).',
	},
	asserter: {
		type: GraphQLString,
		description:
			'Source of the information about the allergy (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-asserter).',
	},
	patient: {
		type: GraphQLString,
		description:
			'Who the sensitivity is for (See http://hl7.org/fhir/SearchParameter/clinical-patient).',
	},
	category: {
		type: TokenScalar,
		description:
			'food | medication | environment | biologic (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-category).',
	},
	last_date: {
		type: DateScalar,
		description:
			'Date(/time) of last known occurrence of a reaction (See http://hl7.org/fhir/SearchParameter/AllergyIntolerance-last-date).',
	},
};
