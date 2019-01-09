const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationknowledge query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-classification
	classification: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.medicineClassification.classification',
		description: 'Specific category assigned to the medication',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-classification-type
	classification_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.medicineClassification.type',
		description:
			'The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification)',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.code',
		description: 'Code that identifies this medication',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-doseform
	doseform: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.doseForm',
		description: 'powder | tablets | capsule +',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-ingredient
	ingredient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationKnowledge.ingredient.itemReference',
		description: 'Medication(s) or substance(s) contained in the medication',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-ingredient-code
	ingredient_code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.ingredient.itemCodeableConcept',
		description: 'Medication(s) or substance(s) contained in the medication',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-manufacturer
	manufacturer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationKnowledge.manufacturer',
		description: 'Manufacturer of the item',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monitoring-program-name
	monitoring_program_name: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.monitoringProgram.name',
		description: 'Name of the reviewing program',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monitoring-program-type
	monitoring_program_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.monitoringProgram.type',
		description: 'Type of program under which the medication is monitored',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monograph
	monograph: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationKnowledge.monograph.source',
		description: 'Associated documentation about the medication',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-monograph-type
	monograph_type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.monograph.type',
		description: 'The category of medication document',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-source-cost
	source_cost: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.cost.source',
		description: 'The source or owner for the price information',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationKnowledge-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationKnowledge.status',
		description: 'active | inactive | entered-in-error',
	},
};
