const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the allergyintolerance query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.category',
		description:
			'food | medication | environment | other - Category of Substance',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-criticality
	criticality: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.criticality',
		description: 'CRITL | CRITH | CRITU',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.recordedDate',
		description: 'When recorded',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.identifier',
		description: 'External ids for this item',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-last-date
	last_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.lastOccurence',
		description: 'Date(/time) of last known occurrence of a reaction',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-manifestation
	manifestation: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.manifestation',
		description: 'Clinical symptoms/signs associated with the Event',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-onset
	onset: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'AllergyIntolerance.reaction.onset',
		description: 'Date(/time) when manifestations showed',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.patient',
		description: 'Who the sensitivity is for',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-recorder
	recorder: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.recorder',
		description: 'Who recorded the sensitivity',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-reporter
	reporter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'AllergyIntolerance.reporter',
		description: 'Source of the information about the allergy',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-route
	route: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.exposureRoute',
		description: 'How the subject was exposed to the substance',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-severity
	severity: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.reaction.severity',
		description: 'mild | moderate | severe (of event as a whole)',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.status',
		description:
			'active | unconfirmed | confirmed | inactive | resolved | refuted | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-substance
	substance: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.substance',
		description: 'Substance, (or class) considered to be responsible for risk',
	},
	// http://hl7.org/fhir/SearchParameter/AllergyIntolerance-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'AllergyIntolerance.type',
		description: 'allergy | intolerance - Underlying mechanism (if known)',
	},
};
