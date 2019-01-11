const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the clinicalimpression query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-action
	action: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.action',
		description: 'Actions taken during assessment',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-assessor
	assessor: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.assessor',
		description: 'The clinician performing the assessment',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ClinicalImpression.date',
		description: 'When the assessment occurred',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding
	finding: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ClinicalImpression.finding.item',
		description: 'Specific text or code for finding',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-investigation
	investigation: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.investigations.item',
		description: 'Record of a specific investigation',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.patient',
		description: 'The patient being assessed',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-plan
	plan: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.plan',
		description: 'Plan of action after assessment',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-previous
	previous: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.previous',
		description: 'Reference to last assessment',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-problem
	problem: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.problem',
		description: 'General assessment of patient state',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-resolved
	resolved: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ClinicalImpression.resolved',
		description: 'Diagnoses/conditions resolved since previous assessment',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-ruledout
	ruledout: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ClinicalImpression.ruledOut.item',
		description: 'Specific text of code for diagnosis',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ClinicalImpression.status',
		description: 'in-progress | completed | entered-in-error',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-trigger
	trigger: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.triggerReference',
		description: 'Request or event that necessitated this assessment',
	},
	// http://hl7.org/fhir/SearchParameter/ClinicalImpression-trigger-code
	trigger_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ClinicalImpression.triggerCodeableConcept',
		description: 'Request or event that necessitated this assessment',
	},
};
