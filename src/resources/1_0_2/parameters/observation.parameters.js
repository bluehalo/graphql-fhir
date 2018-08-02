const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the observation query
 */
module.exports = {
	subject: {
		type: GraphQLString,
		description: 'The subject that the observation is about. See http://hl7.org/fhir/SearchParameter/observation-subject.'
	},
	encounter: {
		type: GraphQLString,
		description: 'Healthcare event related to the observation. See http://hl7.org/fhir/SearchParameter/observation-encounter.'
	},
	date: {
		type: DateScalar,
		description: 'Obtained date/time. If the obtained element is a period, a date that falls in the period. See http://hl7.org/fhir/SearchParameter/observation-date.'
	},
	component_value_quantity: {
		type: GraphQLString,
		description: 'The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data). See http://hl7.org/fhir/SearchParameter/observation-component-value-quantity.'
	},
	related: {
		type: GraphQLString,
		description: 'Related Observations - search on related-type and related-target together. See http://hl7.org/fhir/SearchParameter/observation-related.'
	},
	patient: {
		type: GraphQLString,
		description: 'The subject that the observation is about (if patient). See http://hl7.org/fhir/SearchParameter/observation-patient.'
	},
	specimen: {
		type: GraphQLString,
		description: 'Specimen used for this observation. See http://hl7.org/fhir/SearchParameter/observation-specimen.'
	},
	component_value_concept: {
		type: TokenScalar,
		description: 'The value of the component observation, if the value is a CodeableConcept. See http://hl7.org/fhir/SearchParameter/observation-component-value-concept.'
	},
	// TODO: Original field name was an invalid name (original was component-code-value-[x]), name should be updated accordingly. See structure definition this parameter came from.
	component_code_value_: {
		type: GraphQLString,
		description: 'Both component code and one of the component value parameters. See http://hl7.org/fhir/SearchParameter/observation-component-code-value.'
	},
	value_quantity: {
		type: GraphQLString,
		description: 'The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data). See http://hl7.org/fhir/SearchParameter/observation-value-quantity.'
	},
	value_date: {
		type: DateScalar,
		description: 'The value of the observation, if the value is a date or period of time. See http://hl7.org/fhir/SearchParameter/observation-value-date.'
	},
	value_string: {
		type: GraphQLString,
		description: 'The value of the observation, if the value is a string, and also searches in CodeableConcept.text. See http://hl7.org/fhir/SearchParameter/observation-value-string.'
	},
	component_code: {
		type: TokenScalar,
		description: 'The component code of the observation type. See http://hl7.org/fhir/SearchParameter/observation-component-code.'
	},
	status: {
		type: TokenScalar,
		description: 'The status of the observation. See http://hl7.org/fhir/SearchParameter/observation-status.'
	},
	value_concept: {
		type: TokenScalar,
		description: 'The value of the observation, if the value is a CodeableConcept. See http://hl7.org/fhir/SearchParameter/observation-value-concept.'
	},
	code: {
		type: TokenScalar,
		description: 'The code of the observation type. See http://hl7.org/fhir/SearchParameter/observation-code.'
	},
	related_target: {
		type: GraphQLString,
		description: 'Resource that is related to this one. See http://hl7.org/fhir/SearchParameter/observation-related-target.'
	},
	data_absent_reason: {
		type: TokenScalar,
		description: 'The reason why the expected value in the element Observation.value[x] is missing. See http://hl7.org/fhir/SearchParameter/observation-data-absent-reason.'
	},
	category: {
		type: TokenScalar,
		description: 'The classification of the type of observation. See http://hl7.org/fhir/SearchParameter/observation-category.'
	},
	component_data_absent_reason: {
		type: TokenScalar,
		description: 'The reason why the expected value in the element Observation.component.value[x] is missing. See http://hl7.org/fhir/SearchParameter/observation-component-data-absent-reason.'
	},
	device: {
		type: GraphQLString,
		description: 'The Device that generated the observation data. See http://hl7.org/fhir/SearchParameter/observation-device.'
	},
	related_type: {
		type: TokenScalar,
		description: 'has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by. See http://hl7.org/fhir/SearchParameter/observation-related-type.'
	},
	performer: {
		type: GraphQLString,
		description: 'Who performed the observation. See http://hl7.org/fhir/SearchParameter/observation-performer.'
	},
	identifier: {
		type: TokenScalar,
		description: 'The unique id for a particular observation. See http://hl7.org/fhir/SearchParameter/observation-identifier.'
	},
	// TODO: Original field name was an invalid name (original was code-value-[x]), name should be updated accordingly. See structure definition this parameter came from.
	code_value_: {
		type: GraphQLString,
		description: 'Both code and one of the value parameters. See http://hl7.org/fhir/SearchParameter/observation-code-value.'
	},
	component_value_string: {
		type: GraphQLString,
		description: 'The value of the component observation, if the value is a string, and also searches in CodeableConcept.text. See http://hl7.org/fhir/SearchParameter/observation-component-value-string.'
	}
};
