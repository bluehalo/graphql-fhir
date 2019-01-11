const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationdispense query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationDispense.medicationCodeableConcept',
		description: 'Return dispenses of this medicine code',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-destination
	destination: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.destination',
		description:
			'Return dispenses that should be sent to a specific destination',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-dispenser
	dispenser: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.dispenser',
		description: 'Return all dispenses performed by a specific individual',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationDispense.identifier',
		description: 'Return dispenses with this external identifier',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-medication
	medication: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.medicationReference',
		description: 'Return dispenses of this medicine resource',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.patient',
		description: 'The identity of a patient to list dispenses  for',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-prescription
	prescription: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.authorizingPrescription',
		description: 'The identity of a prescription to list dispenses from',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-receiver
	receiver: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.receiver',
		description: 'Who collected the medication',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-responsibleparty
	responsibleparty: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationDispense.substitution.responsibleParty',
		description: 'Return all dispenses with the specified responsible party',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationDispense.status',
		description: 'Status of the dispense',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationDispense.type',
		description: 'Return all dispenses of a specific type',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-whenhandedover
	whenhandedover: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationDispense.whenHandedOver',
		description:
			'Date when medication handed over to patient (outpatient setting), or supplied to ward or clinic (inpatient setting)',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationDispense-whenprepared
	whenprepared: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationDispense.whenPrepared',
		description: 'Date when medication prepared',
	},
};
