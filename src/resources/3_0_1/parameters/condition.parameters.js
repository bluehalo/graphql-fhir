const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the condition query
 */
module.exports = {
	severity: {
		type: TokenScalar,
		description: 'The severity of the condition (See http://hl7.org/fhir/SearchParameter/Condition-severity).'
	},
	evidence_detail: {
		type: GraphQLString,
		description: 'Supporting information found elsewhere (See http://hl7.org/fhir/SearchParameter/Condition-evidence-detail).'
	},
	identifier: {
		type: TokenScalar,
		description: 'A unique identifier of the condition record (See http://hl7.org/fhir/SearchParameter/clinical-identifier).'
	},
	onset_info: {
		type: GraphQLString,
		description: 'Onsets as a string (See http://hl7.org/fhir/SearchParameter/Condition-onset-info).'
	},
	code: {
		type: TokenScalar,
		description: 'Code for the condition (See http://hl7.org/fhir/SearchParameter/clinical-code).'
	},
	evidence: {
		type: TokenScalar,
		description: 'Manifestation/symptom (See http://hl7.org/fhir/SearchParameter/Condition-evidence).'
	},
	subject: {
		type: GraphQLString,
		description: 'Who has the condition? (See http://hl7.org/fhir/SearchParameter/Condition-subject).'
	},
	verification_status: {
		type: TokenScalar,
		description: 'provisional | differential | confirmed | refuted | entered-in-error | unknown (See http://hl7.org/fhir/SearchParameter/Condition-verification-status).'
	},
	clinical_status: {
		type: TokenScalar,
		description: 'The clinical status of the condition (See http://hl7.org/fhir/SearchParameter/Condition-clinical-status).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounter when condition first asserted (See http://hl7.org/fhir/SearchParameter/Condition-encounter).'
	},
	abatement_boolean: {
		type: TokenScalar,
		description: 'Abatement boolean (boolean is true or non-boolean values are present) (See http://hl7.org/fhir/SearchParameter/Condition-abatement-boolean).'
	},
	onset_date: {
		type: DateScalar,
		description: 'Date related onsets (dateTime and Period) (See http://hl7.org/fhir/SearchParameter/Condition-onset-date).'
	},
	abatement_date: {
		type: DateScalar,
		description: 'Date-related abatements (dateTime and period) (See http://hl7.org/fhir/SearchParameter/Condition-abatement-date).'
	},
	asserter: {
		type: GraphQLString,
		description: 'Person who asserts this condition (See http://hl7.org/fhir/SearchParameter/Condition-asserter).'
	},
	stage: {
		type: TokenScalar,
		description: 'Simple summary (disease specific) (See http://hl7.org/fhir/SearchParameter/Condition-stage).'
	},
	abatement_string: {
		type: GraphQLString,
		description: 'Abatement as a string (See http://hl7.org/fhir/SearchParameter/Condition-abatement-string).'
	},
	patient: {
		type: GraphQLString,
		description: 'Who has the condition? (See http://hl7.org/fhir/SearchParameter/clinical-patient).'
	},
	context: {
		type: GraphQLString,
		description: 'Encounter or episode when condition first asserted (See http://hl7.org/fhir/SearchParameter/Condition-context).'
	},
	onset_age: {
		type: GraphQLString,
		description: 'Onsets as age or age range (See http://hl7.org/fhir/SearchParameter/Condition-onset-age).'
	},
	abatement_age: {
		type: GraphQLString,
		description: 'Abatement as age or age range (See http://hl7.org/fhir/SearchParameter/Condition-abatement-age).'
	},
	asserted_date: {
		type: DateScalar,
		description: 'Date record was believed accurate (See http://hl7.org/fhir/SearchParameter/Condition-asserted-date).'
	},
	category: {
		type: TokenScalar,
		description: 'The category of the condition (See http://hl7.org/fhir/SearchParameter/Condition-category).'
	},
	body_site: {
		type: TokenScalar,
		description: 'Anatomical location, if relevant (See http://hl7.org/fhir/SearchParameter/Condition-body-site).'
	}
};
