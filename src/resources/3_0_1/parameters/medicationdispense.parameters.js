const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationdispense query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'Return dispenses with this external identifier. See http://hl7.org/fhir/SearchParameter/medications-identifier.'
	},
	performer: {
		type: GraphQLString,
		description: 'Return dispenses performed by a specific individual. See http://hl7.org/fhir/SearchParameter/MedicationDispense-performer.'
	},
	code: {
		type: TokenScalar,
		description: 'Return dispenses of this medicine code. See http://hl7.org/fhir/SearchParameter/medications-code.'
	},
	receiver: {
		type: GraphQLString,
		description: 'The identity of a receiver to list dispenses for. See http://hl7.org/fhir/SearchParameter/MedicationDispense-receiver.'
	},
	subject: {
		type: GraphQLString,
		description: 'The identity of a patient to list dispenses  for. See http://hl7.org/fhir/SearchParameter/MedicationDispense-subject.'
	},
	destination: {
		type: GraphQLString,
		description: 'Return dispenses that should be sent to a specific destination. See http://hl7.org/fhir/SearchParameter/MedicationDispense-destination.'
	},
	medication: {
		type: GraphQLString,
		description: 'Return dispenses of this medicine resource. See http://hl7.org/fhir/SearchParameter/medications-medication.'
	},
	responsibleparty: {
		type: GraphQLString,
		description: 'Return dispenses with the specified responsible party. See http://hl7.org/fhir/SearchParameter/MedicationDispense-responsibleparty.'
	},
	type: {
		type: TokenScalar,
		description: 'Return dispenses of a specific type. See http://hl7.org/fhir/SearchParameter/MedicationDispense-type.'
	},
	whenhandedover: {
		type: DateScalar,
		description: 'Returns dispenses handed over on this date. See http://hl7.org/fhir/SearchParameter/MedicationDispense-whenhandedover.'
	},
	whenprepared: {
		type: DateScalar,
		description: 'Returns dispenses prepared on this date. See http://hl7.org/fhir/SearchParameter/MedicationDispense-whenprepared.'
	},
	prescription: {
		type: GraphQLString,
		description: 'The identity of a prescription to list dispenses from. See http://hl7.org/fhir/SearchParameter/medications-prescription.'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a patient to list dispenses  for. See http://hl7.org/fhir/SearchParameter/medications-patient.'
	},
	context: {
		type: GraphQLString,
		description: 'Returns dispenses with a specific context (episode or episode of care). See http://hl7.org/fhir/SearchParameter/MedicationDispense-context.'
	},
	status: {
		type: TokenScalar,
		description: 'Return dispenses with a specified dispense status. See http://hl7.org/fhir/SearchParameter/medications-status.'
	}
};
