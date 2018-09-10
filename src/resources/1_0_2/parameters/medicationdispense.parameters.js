const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the medicationdispense query
 */
module.exports = {
	medication: {
		type: GraphQLString,
		description: 'Return dispenses of this medicine resource (See http://hl7.org/fhir/SearchParameter/medicationdispense-medication).'
	},
	patient: {
		type: GraphQLString,
		description: 'The identity of a patient to list dispenses  for (See http://hl7.org/fhir/SearchParameter/medicationdispense-patient).'
	},
	receiver: {
		type: GraphQLString,
		description: 'Who collected the medication (See http://hl7.org/fhir/SearchParameter/medicationdispense-receiver).'
	},
	status: {
		type: TokenScalar,
		description: 'Status of the dispense (See http://hl7.org/fhir/SearchParameter/medicationdispense-status).'
	},
	prescription: {
		type: GraphQLString,
		description: 'The identity of a prescription to list dispenses from (See http://hl7.org/fhir/SearchParameter/medicationdispense-prescription).'
	},
	responsibleparty: {
		type: GraphQLString,
		description: 'Return all dispenses with the specified responsible party (See http://hl7.org/fhir/SearchParameter/medicationdispense-responsibleparty).'
	},
	dispenser: {
		type: GraphQLString,
		description: 'Return all dispenses performed by a specific individual (See http://hl7.org/fhir/SearchParameter/medicationdispense-dispenser).'
	},
	code: {
		type: TokenScalar,
		description: 'Return dispenses of this medicine code (See http://hl7.org/fhir/SearchParameter/medicationdispense-code).'
	},
	type: {
		type: TokenScalar,
		description: 'Return all dispenses of a specific type (See http://hl7.org/fhir/SearchParameter/medicationdispense-type).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Return dispenses with this external identifier (See http://hl7.org/fhir/SearchParameter/medicationdispense-identifier).'
	},
	whenprepared: {
		type: DateScalar,
		description: 'Date when medication prepared (See http://hl7.org/fhir/SearchParameter/medicationdispense-whenprepared).'
	},
	whenhandedover: {
		type: DateScalar,
		description: 'Date when medication handed over to patient (outpatient setting), or supplied to ward or clinic (inpatient setting) (See http://hl7.org/fhir/SearchParameter/medicationdispense-whenhandedover).'
	},
	destination: {
		type: GraphQLString,
		description: 'Return dispenses that should be sent to a specific destination (See http://hl7.org/fhir/SearchParameter/medicationdispense-destination).'
	}
};
