const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the allergyintolerance query
 */
module.exports = {
	status: {
		type: TokenScalar,
		description: 'active | unconfirmed | confirmed | inactive | resolved | refuted | entered-in-error (See http://hl7.org/fhir/SearchParameter/allergyintolerance-status).'
	},
	onset: {
		type: DateScalar,
		description: 'Date(/time) when manifestations showed (See http://hl7.org/fhir/SearchParameter/allergyintolerance-onset).'
	},
	last_date: {
		type: DateScalar,
		description: 'Date(/time) of last known occurrence of a reaction (See http://hl7.org/fhir/SearchParameter/allergyintolerance-last-date).'
	},
	severity: {
		type: TokenScalar,
		description: 'mild | moderate | severe (of event as a whole) (See http://hl7.org/fhir/SearchParameter/allergyintolerance-severity).'
	},
	type: {
		type: TokenScalar,
		description: 'allergy | intolerance - Underlying mechanism (if known) (See http://hl7.org/fhir/SearchParameter/allergyintolerance-type).'
	},
	date: {
		type: DateScalar,
		description: 'When recorded (See http://hl7.org/fhir/SearchParameter/allergyintolerance-date).'
	},
	reporter: {
		type: GraphQLString,
		description: 'Source of the information about the allergy (See http://hl7.org/fhir/SearchParameter/allergyintolerance-reporter).'
	},
	substance: {
		type: TokenScalar,
		description: 'Substance, (or class) considered to be responsible for risk (See http://hl7.org/fhir/SearchParameter/allergyintolerance-substance).'
	},
	criticality: {
		type: TokenScalar,
		description: 'CRITL | CRITH | CRITU (See http://hl7.org/fhir/SearchParameter/allergyintolerance-criticality).'
	},
	category: {
		type: TokenScalar,
		description: 'food | medication | environment | other - Category of Substance (See http://hl7.org/fhir/SearchParameter/allergyintolerance-category).'
	},
	patient: {
		type: GraphQLString,
		description: 'Who the sensitivity is for (See http://hl7.org/fhir/SearchParameter/allergyintolerance-patient).'
	},
	recorder: {
		type: GraphQLString,
		description: 'Who recorded the sensitivity (See http://hl7.org/fhir/SearchParameter/allergyintolerance-recorder).'
	},
	route: {
		type: TokenScalar,
		description: 'How the subject was exposed to the substance (See http://hl7.org/fhir/SearchParameter/allergyintolerance-route).'
	},
	identifier: {
		type: TokenScalar,
		description: 'External ids for this item (See http://hl7.org/fhir/SearchParameter/allergyintolerance-identifier).'
	},
	manifestation: {
		type: TokenScalar,
		description: 'Clinical symptoms/signs associated with the Event (See http://hl7.org/fhir/SearchParameter/allergyintolerance-manifestation).'
	}
};
