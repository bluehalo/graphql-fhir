const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationorder query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicationOrder-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationOrder.medicationCodeableConcept',
		description: 'Return administrations of this medication code',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationOrder-datewritten
	datewritten: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationOrder.dateWritten',
		description: 'Return prescriptions written on this date',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationOrder-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationOrder.encounter',
		description: 'Return prescriptions with this encounter identifier',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationOrder-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationOrder.identifier',
		description: 'Return prescriptions with this external identifier',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationOrder-medication
	medication: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationOrder.medicationReference',
		description: 'Return administrations of this medication reference',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationOrder-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationOrder.patient',
		description: 'The identity of a patient to list orders  for',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationOrder-prescriber
	prescriber: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationOrder.prescriber',
		description: 'Who ordered the medication(s)',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationOrder-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationOrder.status',
		description: 'Status of the prescription',
	},
};
