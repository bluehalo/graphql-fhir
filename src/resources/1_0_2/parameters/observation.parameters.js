const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the observation query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Observation-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.category',
		description: 'The classification of the type of observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.code',
		description: 'The code of the observation type',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-code
	component_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.component.code',
		description: 'The component code of the observation type',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-data-absent-reason
	component_data_absent_reason: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.component.dataAbsentReason',
		description:
			'The reason why the expected value in the element Observation.component.value[x] is missing.',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-value-concept
	component_value_concept: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.component.valueCodeableConcept',
		description:
			'The value of the component observation, if the value is a CodeableConcept',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-value-quantity
	component_value_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Observation.component.valueQuantity',
		description:
			'The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-component-value-string
	component_value_string: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Observation.component.valueString',
		description:
			'The value of the component observation, if the value is a string, and also searches in CodeableConcept.text',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-data-absent-reason
	data_absent_reason: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.dataAbsentReason',
		description:
			'The reason why the expected value in the element Observation.value[x] is missing.',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Observation.effectiveDateTime',
		description:
			'Obtained date/time. If the obtained element is a period, a date that falls in the period',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-device
	device: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.device',
		description: 'The Device that generated the observation data.',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.encounter',
		description: 'Healthcare event related to the observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.identifier',
		description: 'The unique id for a particular observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.subject',
		description: 'The subject that the observation is about (if patient)',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.performer',
		description: 'Who performed the observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-related
	related: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'Related Observations - search on related-type and related-target together',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-related-target
	related_target: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.related.target',
		description: 'Resource that is related to this one',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-related-type
	related_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.related.type',
		description:
			'has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-specimen
	specimen: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.specimen',
		description: 'Specimen used for this observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.status',
		description: 'The status of the observation',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Observation.subject',
		description: 'The subject that the observation is about',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-value-concept
	value_concept: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Observation.valueCodeableConcept',
		description:
			'The value of the observation, if the value is a CodeableConcept',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-value-date
	value_date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Observation.valueDateTime',
		description:
			'The value of the observation, if the value is a date or period of time',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-value-quantity
	value_quantity: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Observation.valueQuantity',
		description:
			'The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)',
	},
	// http://hl7.org/fhir/SearchParameter/Observation-value-string
	value_string: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Observation.valueString',
		description:
			'The value of the observation, if the value is a string, and also searches in CodeableConcept.text',
	},
};
