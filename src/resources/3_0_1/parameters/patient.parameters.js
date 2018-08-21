const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the patient query
 */
module.exports = {
	birthdate: {
		type: DateScalar,
		description: 'The patient\'s date of birth. See http://hl7.org/fhir/SearchParameter/individual-birthdate.'
	},
	deceased: {
		type: TokenScalar,
		description: 'This patient has been marked as deceased, or as a death date entered. See http://hl7.org/fhir/SearchParameter/Patient-deceased.'
	},
	address_state: {
		type: GraphQLString,
		description: 'A state specified in an address. See http://hl7.org/fhir/SearchParameter/individual-address-state.'
	},
	gender: {
		type: TokenScalar,
		description: 'Gender of the patient. See http://hl7.org/fhir/SearchParameter/individual-gender.'
	},
	animal_species: {
		type: TokenScalar,
		description: 'The species for animal patients. See http://hl7.org/fhir/SearchParameter/Patient-animal-species.'
	},
	link: {
		type: GraphQLString,
		description: 'All patients linked to the given patient. See http://hl7.org/fhir/SearchParameter/Patient-link.'
	},
	language: {
		type: TokenScalar,
		description: 'Language code (irrespective of use value). See http://hl7.org/fhir/SearchParameter/Patient-language.'
	},
	animal_breed: {
		type: TokenScalar,
		description: 'The breed for animal patients. See http://hl7.org/fhir/SearchParameter/Patient-animal-breed.'
	},
	address_country: {
		type: GraphQLString,
		description: 'A country specified in an address. See http://hl7.org/fhir/SearchParameter/individual-address-country.'
	},
	death_date: {
		type: DateScalar,
		description: 'The date of death has been provided and satisfies this search value. See http://hl7.org/fhir/SearchParameter/Patient-death-date.'
	},
	phonetic: {
		type: GraphQLString,
		description: 'A portion of either family or given name using some kind of phonetic matching algorithm. See http://hl7.org/fhir/SearchParameter/individual-phonetic.'
	},
	telecom: {
		type: TokenScalar,
		description: 'The value in any kind of telecom details of the patient. See http://hl7.org/fhir/SearchParameter/individual-telecom.'
	},
	address_city: {
		type: GraphQLString,
		description: 'A city specified in an address. See http://hl7.org/fhir/SearchParameter/individual-address-city.'
	},
	email: {
		type: TokenScalar,
		description: 'A value in an email contact. See http://hl7.org/fhir/SearchParameter/individual-email.'
	},
	identifier: {
		type: TokenScalar,
		description: 'A patient identifier. See http://hl7.org/fhir/SearchParameter/Patient-identifier.'
	},
	given: {
		type: GraphQLString,
		description: 'A portion of the given name of the patient. See http://hl7.org/fhir/SearchParameter/individual-given.'
	},
	address: {
		type: GraphQLString,
		description: 'A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text. See http://hl7.org/fhir/SearchParameter/individual-address.'
	},
	general_practitioner: {
		type: GraphQLString,
		description: 'Patient\'s nominated general practitioner, not the organization that manages the record. See http://hl7.org/fhir/SearchParameter/Patient-general-practitioner.'
	},
	active: {
		type: TokenScalar,
		description: 'Whether the patient record is active. See http://hl7.org/fhir/SearchParameter/Patient-active.'
	},
	address_postalcode: {
		type: GraphQLString,
		description: 'A postalCode specified in an address. See http://hl7.org/fhir/SearchParameter/individual-address-postalcode.'
	},
	phone: {
		type: TokenScalar,
		description: 'A value in a phone contact. See http://hl7.org/fhir/SearchParameter/individual-phone.'
	},
	organization: {
		type: GraphQLString,
		description: 'The organization at which this person is a patient. See http://hl7.org/fhir/SearchParameter/Patient-organization.'
	},
	name: {
		type: GraphQLString,
		description: 'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text. See http://hl7.org/fhir/SearchParameter/Patient-name.'
	},
	address_use: {
		type: TokenScalar,
		description: 'A use code specified in an address. See http://hl7.org/fhir/SearchParameter/individual-address-use.'
	},
	family: {
		type: GraphQLString,
		description: 'A portion of the family name of the patient. See http://hl7.org/fhir/SearchParameter/individual-family.'
	}
};
