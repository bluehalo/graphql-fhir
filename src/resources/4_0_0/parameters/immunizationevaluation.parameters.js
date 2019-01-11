const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the immunizationevaluation query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'ImmunizationEvaluation.date',
		description: 'Date the evaluation was generated',
	},
	// http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-dose-status
	dose_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImmunizationEvaluation.doseStatus',
		description: 'The status of the dose relative to published recommendations',
	},
	// http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImmunizationEvaluation.identifier',
		description: 'ID of the evaluation',
	},
	// http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-immunization-event
	immunization_event: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImmunizationEvaluation.immunizationEvent',
		description: 'The vaccine administration event being evaluated',
	},
	// http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'ImmunizationEvaluation.patient',
		description: 'The patient being evaluated',
	},
	// http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImmunizationEvaluation.status',
		description: 'Immunization evaluation status',
	},
	// http://hl7.org/fhir/SearchParameter/ImmunizationEvaluation-target-disease
	target_disease: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'ImmunizationEvaluation.targetDisease',
		description: 'The vaccine preventable disease being evaluated against',
	},
};
