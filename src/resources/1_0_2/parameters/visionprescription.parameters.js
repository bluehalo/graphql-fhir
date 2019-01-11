const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the visionprescription query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/VisionPrescription-datewritten
	datewritten: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'VisionPrescription.dateWritten',
		description: 'Return prescriptions written on this date',
	},
	// http://hl7.org/fhir/SearchParameter/VisionPrescription-encounter
	encounter: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'VisionPrescription.encounter',
		description: 'Return prescriptions with this encounter identifier',
	},
	// http://hl7.org/fhir/SearchParameter/VisionPrescription-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'VisionPrescription.identifier',
		description: 'Return prescriptions with this external identifier',
	},
	// http://hl7.org/fhir/SearchParameter/VisionPrescription-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'VisionPrescription.patient',
		description: 'The identity of a patient to list dispenses for',
	},
	// http://hl7.org/fhir/SearchParameter/VisionPrescription-prescriber
	prescriber: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'VisionPrescription.prescriber',
		description: 'Who authorizes the vision product',
	},
};
