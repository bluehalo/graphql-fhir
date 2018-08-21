const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the clinicalimpression query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'When the assessment was documented. See http://hl7.org/fhir/SearchParameter/clinical-date.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Business identifier. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-identifier.'
	},
	previous: {
		type: GraphQLString,
		description: 'Reference to last assessment. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-previous.'
	},
	finding_code: {
		type: TokenScalar,
		description: 'What was found. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding-code.'
	},
	assessor: {
		type: GraphQLString,
		description: 'The clinician performing the assessment. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-assessor.'
	},
	subject: {
		type: GraphQLString,
		description: 'Patient or group assessed. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-subject.'
	},
	finding_ref: {
		type: GraphQLString,
		description: 'What was found. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding-ref.'
	},
	problem: {
		type: GraphQLString,
		description: 'Relevant impressions of patient state. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-problem.'
	},
	patient: {
		type: GraphQLString,
		description: 'Patient or group assessed. See http://hl7.org/fhir/SearchParameter/clinical-patient.'
	},
	context: {
		type: GraphQLString,
		description: 'Encounter or Episode created from. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-context.'
	},
	investigation: {
		type: GraphQLString,
		description: 'Record of a specific investigation. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-investigation.'
	},
	action: {
		type: GraphQLString,
		description: 'Action taken as part of assessment procedure. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-action.'
	},
	status: {
		type: TokenScalar,
		description: 'draft | completed | entered-in-error. See http://hl7.org/fhir/SearchParameter/ClinicalImpression-status.'
	}
};
