const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the condition query
 */
module.exports = {
	date_recorded: {
		type: DateScalar,
		description: 'A date, when the Condition statement was documented. See http://hl7.org/fhir/SearchParameter/condition-date-recorded.'
	},
	asserter: {
		type: GraphQLString,
		description: 'Person who asserts this condition. See http://hl7.org/fhir/SearchParameter/condition-asserter.'
	},
	onset: {
		type: DateScalar,
		description: 'Date related onsets (dateTime and Period). See http://hl7.org/fhir/SearchParameter/condition-onset.'
	},
	evidence: {
		type: TokenScalar,
		description: 'Manifestation/symptom. See http://hl7.org/fhir/SearchParameter/condition-evidence.'
	},
	body_site: {
		type: TokenScalar,
		description: 'Anatomical location, if relevant. See http://hl7.org/fhir/SearchParameter/condition-body-site.'
	},
	onset_info: {
		type: GraphQLString,
		description: 'Other onsets (boolean, age, range, string). See http://hl7.org/fhir/SearchParameter/condition-onset-info.'
	},
	severity: {
		type: TokenScalar,
		description: 'The severity of the condition. See http://hl7.org/fhir/SearchParameter/condition-severity.'
	},
	code: {
		type: TokenScalar,
		description: 'Code for the condition. See http://hl7.org/fhir/SearchParameter/condition-code.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounter when condition first asserted. See http://hl7.org/fhir/SearchParameter/condition-encounter.'
	},
	stage: {
		type: TokenScalar,
		description: 'Simple summary (disease specific). See http://hl7.org/fhir/SearchParameter/condition-stage.'
	},
	category: {
		type: TokenScalar,
		description: 'The category of the condition. See http://hl7.org/fhir/SearchParameter/condition-category.'
	},
	patient: {
		type: GraphQLString,
		description: 'Who has the condition?. See http://hl7.org/fhir/SearchParameter/condition-patient.'
	},
	clinicalstatus: {
		type: TokenScalar,
		description: 'The clinical status of the condition. See http://hl7.org/fhir/SearchParameter/condition-clinicalstatus.'
	},
	identifier: {
		type: TokenScalar,
		description: 'A unique identifier of the condition record. See http://hl7.org/fhir/SearchParameter/condition-identifier.'
	}
};
