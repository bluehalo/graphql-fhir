const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the observation query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'Obtained date/time. If the obtained element is a period, a date that falls in the period (See http://hl7.org/fhir/SearchParameter/clinical-date).'
	},
	combo_data_absent_reason: {
		type: TokenScalar,
		description: 'The reason why the expected value in the element Observation.value[x] or Observation.component.value[x] is missing. (See http://hl7.org/fhir/SearchParameter/Observation-combo-data-absent-reason).'
	},
	code: {
		type: TokenScalar,
		description: 'The code of the observation type (See http://hl7.org/fhir/SearchParameter/clinical-code).'
	},
	combo_code_value_quantity: {
		type: GraphQLString,
		description: 'Code and quantity value parameter pair, including in components (See http://hl7.org/fhir/SearchParameter/Observation-combo-code-value-quantity).'
	},
	subject: {
		type: GraphQLString,
		description: 'The subject that the observation is about (See http://hl7.org/fhir/SearchParameter/Observation-subject).'
	},
	component_data_absent_reason: {
		type: TokenScalar,
		description: 'The reason why the expected value in the element Observation.component.value[x] is missing. (See http://hl7.org/fhir/SearchParameter/Observation-component-data-absent-reason).'
	},
	value_concept: {
		type: TokenScalar,
		description: 'The value of the observation, if the value is a CodeableConcept (See http://hl7.org/fhir/SearchParameter/Observation-value-concept).'
	},
	value_date: {
		type: DateScalar,
		description: 'The value of the observation, if the value is a date or period of time (See http://hl7.org/fhir/SearchParameter/Observation-value-date).'
	},
	code_value_string: {
		type: GraphQLString,
		description: 'Code and string value parameter pair (See http://hl7.org/fhir/SearchParameter/Observation-code-value-string).'
	},
	component_code_value_quantity: {
		type: GraphQLString,
		description: 'Component code and component quantity value parameter pair (See http://hl7.org/fhir/SearchParameter/Observation-component-code-value-quantity).'
	},
	based_on: {
		type: GraphQLString,
		description: 'Reference to the test or procedure request. (See http://hl7.org/fhir/SearchParameter/Observation-based-on).'
	},
	related: {
		type: GraphQLString,
		description: 'Related Observations - search on related-type and related-target together (See http://hl7.org/fhir/SearchParameter/Observation-related).'
	},
	code_value_date: {
		type: GraphQLString,
		description: 'Code and date/time value parameter pair (See http://hl7.org/fhir/SearchParameter/Observation-code-value-date).'
	},
	patient: {
		type: GraphQLString,
		description: 'The subject that the observation is about (if patient) (See http://hl7.org/fhir/SearchParameter/clinical-patient).'
	},
	specimen: {
		type: GraphQLString,
		description: 'Specimen used for this observation (See http://hl7.org/fhir/SearchParameter/Observation-specimen).'
	},
	component_code: {
		type: TokenScalar,
		description: 'The component code of the observation type (See http://hl7.org/fhir/SearchParameter/Observation-component-code).'
	},
	code_value_quantity: {
		type: GraphQLString,
		description: 'Code and quantity value parameter pair (See http://hl7.org/fhir/SearchParameter/Observation-code-value-quantity).'
	},
	context: {
		type: GraphQLString,
		description: 'Healthcare event  (Episode-of-care or Encounter) related to the observation (See http://hl7.org/fhir/SearchParameter/Observation-context).'
	},
	combo_code_value_concept: {
		type: GraphQLString,
		description: 'Code and coded value parameter pair, including in components (See http://hl7.org/fhir/SearchParameter/Observation-combo-code-value-concept).'
	},
	value_string: {
		type: GraphQLString,
		description: 'The value of the observation, if the value is a string, and also searches in CodeableConcept.text (See http://hl7.org/fhir/SearchParameter/Observation-value-string).'
	},
	identifier: {
		type: TokenScalar,
		description: 'The unique id for a particular observation (See http://hl7.org/fhir/SearchParameter/clinical-identifier).'
	},
	performer: {
		type: GraphQLString,
		description: 'Who performed the observation (See http://hl7.org/fhir/SearchParameter/Observation-performer).'
	},
	combo_code: {
		type: TokenScalar,
		description: 'The code of the observation type or component type (See http://hl7.org/fhir/SearchParameter/Observation-combo-code).'
	},
	method: {
		type: TokenScalar,
		description: 'The method used for the observation (See http://hl7.org/fhir/SearchParameter/Observation-method).'
	},
	value_quantity: {
		type: GraphQLString,
		description: 'The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data) (See http://hl7.org/fhir/SearchParameter/Observation-value-quantity).'
	},
	component_value_quantity: {
		type: GraphQLString,
		description: 'The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data) (See http://hl7.org/fhir/SearchParameter/Observation-component-value-quantity).'
	},
	data_absent_reason: {
		type: TokenScalar,
		description: 'The reason why the expected value in the element Observation.value[x] is missing. (See http://hl7.org/fhir/SearchParameter/Observation-data-absent-reason).'
	},
	combo_value_quantity: {
		type: GraphQLString,
		description: 'The value or component value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data) (See http://hl7.org/fhir/SearchParameter/Observation-combo-value-quantity).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Encounter related to the observation (See http://hl7.org/fhir/SearchParameter/clinical-encounter).'
	},
	related_type: {
		type: TokenScalar,
		description: 'has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by (See http://hl7.org/fhir/SearchParameter/Observation-related-type).'
	},
	related_target: {
		type: GraphQLString,
		description: 'Resource that is related to this one (See http://hl7.org/fhir/SearchParameter/Observation-related-target).'
	},
	code_value_concept: {
		type: GraphQLString,
		description: 'Code and coded value parameter pair (See http://hl7.org/fhir/SearchParameter/Observation-code-value-concept).'
	},
	component_code_value_concept: {
		type: GraphQLString,
		description: 'Component code and component coded value parameter pair (See http://hl7.org/fhir/SearchParameter/Observation-component-code-value-concept).'
	},
	component_value_concept: {
		type: TokenScalar,
		description: 'The value of the component observation, if the value is a CodeableConcept (See http://hl7.org/fhir/SearchParameter/Observation-component-value-concept).'
	},
	category: {
		type: TokenScalar,
		description: 'The classification of the type of observation (See http://hl7.org/fhir/SearchParameter/Observation-category).'
	},
	device: {
		type: GraphQLString,
		description: 'The Device that generated the observation data. (See http://hl7.org/fhir/SearchParameter/Observation-device).'
	},
	combo_value_concept: {
		type: TokenScalar,
		description: 'The value or component value of the observation, if the value is a CodeableConcept (See http://hl7.org/fhir/SearchParameter/Observation-combo-value-concept).'
	},
	status: {
		type: TokenScalar,
		description: 'The status of the observation (See http://hl7.org/fhir/SearchParameter/Observation-status).'
	}
};
