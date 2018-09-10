const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the clinicalimpression query
 */
module.exports = {
	assessor: {
		type: GraphQLString,
		description: 'The clinician performing the assessment (See http://hl7.org/fhir/SearchParameter/clinicalimpression-assessor).'
	},
	trigger: {
		type: GraphQLString,
		description: 'Request or event that necessitated this assessment (See http://hl7.org/fhir/SearchParameter/clinicalimpression-trigger).'
	},
	patient: {
		type: GraphQLString,
		description: 'The patient being assessed (See http://hl7.org/fhir/SearchParameter/clinicalimpression-patient).'
	},
	plan: {
		type: GraphQLString,
		description: 'Plan of action after assessment (See http://hl7.org/fhir/SearchParameter/clinicalimpression-plan).'
	},
	resolved: {
		type: TokenScalar,
		description: 'Diagnoses/conditions resolved since previous assessment (See http://hl7.org/fhir/SearchParameter/clinicalimpression-resolved).'
	},
	trigger_code: {
		type: TokenScalar,
		description: 'Request or event that necessitated this assessment (See http://hl7.org/fhir/SearchParameter/clinicalimpression-trigger-code).'
	},
	previous: {
		type: GraphQLString,
		description: 'Reference to last assessment (See http://hl7.org/fhir/SearchParameter/clinicalimpression-previous).'
	},
	status: {
		type: TokenScalar,
		description: 'in-progress | completed | entered-in-error (See http://hl7.org/fhir/SearchParameter/clinicalimpression-status).'
	},
	action: {
		type: GraphQLString,
		description: 'Actions taken during assessment (See http://hl7.org/fhir/SearchParameter/clinicalimpression-action).'
	},
	finding: {
		type: TokenScalar,
		description: 'Specific text or code for finding (See http://hl7.org/fhir/SearchParameter/clinicalimpression-finding).'
	},
	investigation: {
		type: GraphQLString,
		description: 'Record of a specific investigation (See http://hl7.org/fhir/SearchParameter/clinicalimpression-investigation).'
	},
	problem: {
		type: GraphQLString,
		description: 'General assessment of patient state (See http://hl7.org/fhir/SearchParameter/clinicalimpression-problem).'
	},
	date: {
		type: DateScalar,
		description: 'When the assessment occurred (See http://hl7.org/fhir/SearchParameter/clinicalimpression-date).'
	},
	ruledout: {
		type: TokenScalar,
		description: 'Specific text of code for diagnosis (See http://hl7.org/fhir/SearchParameter/clinicalimpression-ruledout).'
	}
};
