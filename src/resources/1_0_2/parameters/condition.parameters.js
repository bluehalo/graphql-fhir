const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the condition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Condition-asserter
	asserter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Condition.asserter',
		description: 'Person who asserts this condition',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-body-site
	body_site: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.bodySite',
		description: 'Anatomical location, if relevant',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.category',
		description: 'The category of the condition',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-clinicalstatus
	clinicalstatus: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.clinicalStatus',
		description: 'The clinical status of the condition',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.code',
		description: 'Code for the condition',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-date-recorded
	date_recorded: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Condition.dateRecorded',
		description: 'A date, when the Condition statement was documented',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Condition.encounter',
		description: 'Encounter when condition first asserted',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-evidence
	evidence: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.evidence.code',
		description: 'Manifestation/symptom',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.identifier',
		description: 'A unique identifier of the condition record',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-onset
	onset: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Condition.onsetDateTime',
		description: 'Date related onsets (dateTime and Period)',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-onset-info
	onset_info: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Condition.onsetDateTime',
		description: 'Other onsets (boolean, age, range, string)',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Condition.patient',
		description: 'Who has the condition?',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-severity
	severity: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.severity',
		description: 'The severity of the condition',
	},
	// http://hl7.org/fhir/SearchParameter/Condition-stage
	stage: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Condition.stage.summary',
		description: 'Simple summary (disease specific)',
	},
	// http://hl7.org/fhir/SearchParameter/condition-daf-Condition-age
	age: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: '',
		description: 'Search based on Condition onsetAge',
	},
};
