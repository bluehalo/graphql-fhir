const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the patient query
 */
module.exports = {
	animal_breed: {
		type: TokenScalar,
		description: 'The breed for animal patients. See http://hl7.org/fhir/SearchParameter/patient-animal-breed.'
	},
	phone: {
		type: TokenScalar,
		description: 'A value in a phone contact. See http://hl7.org/fhir/SearchParameter/patient-phone.'
	},
	phonetic: {
		type: GraphQLString,
		description: 'A portion of either family or given name using some kind of phonetic matching algorithm. See http://hl7.org/fhir/SearchParameter/patient-phonetic.'
	},
	link: {
		type: GraphQLString,
		description: 'All patients linked to the given patient. See http://hl7.org/fhir/SearchParameter/patient-link.'
	},
	address_country: {
		type: GraphQLString,
		description: 'A country specified in an address. See http://hl7.org/fhir/SearchParameter/patient-address-country.'
	},
	animal_species: {
		type: TokenScalar,
		description: 'The species for animal patients. See http://hl7.org/fhir/SearchParameter/patient-animal-species.'
	},
	deathdate: {
		type: DateScalar,
		description: 'The date of death has been provided and satisfies this search value. See http://hl7.org/fhir/SearchParameter/patient-deathdate.'
	},
	organization: {
		type: GraphQLString,
		description: 'The organization at which this person is a patient. See http://hl7.org/fhir/SearchParameter/patient-organization.'
	},
	address_city: {
		type: GraphQLString,
		description: 'A city specified in an address. See http://hl7.org/fhir/SearchParameter/patient-address-city.'
	},
	address_state: {
		type: GraphQLString,
		description: 'A state specified in an address. See http://hl7.org/fhir/SearchParameter/patient-address-state.'
	},
	careprovider: {
		type: GraphQLString,
		description: 'Patient\'s nominated care provider, could be a care manager, not the organization that manages the record. See http://hl7.org/fhir/SearchParameter/patient-careprovider.'
	},
	given: {
		type: GraphQLString,
		description: 'A portion of the given name of the patient. See http://hl7.org/fhir/SearchParameter/patient-given.'
	},
	email: {
		type: TokenScalar,
		description: 'A value in an email contact. See http://hl7.org/fhir/SearchParameter/patient-email.'
	},
	address: {
		type: GraphQLString,
		description: 'An address in any kind of address/part of the patient. See http://hl7.org/fhir/SearchParameter/patient-address.'
	},
	address_use: {
		type: TokenScalar,
		description: 'A use code specified in an address. See http://hl7.org/fhir/SearchParameter/patient-address-use.'
	},
	family: {
		type: GraphQLString,
		description: 'A portion of the family name of the patient. See http://hl7.org/fhir/SearchParameter/patient-family.'
	},
	name: {
		type: GraphQLString,
		description: 'A portion of either family or given name of the patient. See http://hl7.org/fhir/SearchParameter/patient-name.'
	},
	birthdate: {
		type: DateScalar,
		description: 'The patient\'s date of birth. See http://hl7.org/fhir/SearchParameter/patient-birthdate.'
	},
	telecom: {
		type: TokenScalar,
		description: 'The value in any kind of telecom details of the patient. See http://hl7.org/fhir/SearchParameter/patient-telecom.'
	},
	active: {
		type: TokenScalar,
		description: 'Whether the patient record is active. See http://hl7.org/fhir/SearchParameter/patient-active.'
	},
	gender: {
		type: TokenScalar,
		description: 'Gender of the patient. See http://hl7.org/fhir/SearchParameter/patient-gender.'
	},
	deceased: {
		type: TokenScalar,
		description: 'This patient has been marked as deceased, or as a death date entered. See http://hl7.org/fhir/SearchParameter/patient-deceased.'
	},
	language: {
		type: TokenScalar,
		description: 'Language code (irrespective of use value). See http://hl7.org/fhir/SearchParameter/patient-language.'
	},
	identifier: {
		type: TokenScalar,
		description: 'A patient identifier. See http://hl7.org/fhir/SearchParameter/patient-identifier.'
	},
	address_postalcode: {
		type: GraphQLString,
		description: 'A postalCode specified in an address. See http://hl7.org/fhir/SearchParameter/patient-address-postalcode.'
	}
};
