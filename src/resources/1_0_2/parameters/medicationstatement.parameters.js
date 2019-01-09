const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationstatement query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationStatement.medicationCodeableConcept',
		description: 'Return administrations of this medication code',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-effectivedate
	effectivedate: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'MedicationStatement.effectiveDateTime',
		description: 'Date when patient was taking (or not taking) the medication',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationStatement.identifier',
		description: 'Return statements with this external identifier',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-medication
	medication: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationStatement.medicationReference',
		description: 'Return administrations of this medication reference',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationStatement.patient',
		description: 'The identity of a patient to list statements  for',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-source
	source: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MedicationStatement.informationSource',
		description: 'Who the information in the statement came from',
	},
	// http://hl7.org/fhir/SearchParameter/MedicationStatement-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MedicationStatement.status',
		description: 'Return statements that match the given status',
	},
};
