const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the relatedperson query
 */
module.exports = {
	phone: {
		type: TokenScalar,
		description: 'A value in a phone contact (See http://hl7.org/fhir/SearchParameter/relatedperson-phone).'
	},
	phonetic: {
		type: GraphQLString,
		description: 'A portion of name using some kind of phonetic matching algorithm (See http://hl7.org/fhir/SearchParameter/relatedperson-phonetic).'
	},
	address_country: {
		type: GraphQLString,
		description: 'A country specified in an address (See http://hl7.org/fhir/SearchParameter/relatedperson-address-country).'
	},
	patient: {
		type: GraphQLString,
		description: 'The patient this person is related to (See http://hl7.org/fhir/SearchParameter/relatedperson-patient).'
	},
	address_city: {
		type: GraphQLString,
		description: 'A city specified in an address (See http://hl7.org/fhir/SearchParameter/relatedperson-address-city).'
	},
	address_state: {
		type: GraphQLString,
		description: 'A state specified in an address (See http://hl7.org/fhir/SearchParameter/relatedperson-address-state).'
	},
	email: {
		type: TokenScalar,
		description: 'A value in an email contact (See http://hl7.org/fhir/SearchParameter/relatedperson-email).'
	},
	address: {
		type: GraphQLString,
		description: 'An address in any kind of address/part (See http://hl7.org/fhir/SearchParameter/relatedperson-address).'
	},
	address_use: {
		type: TokenScalar,
		description: 'A use code specified in an address (See http://hl7.org/fhir/SearchParameter/relatedperson-address-use).'
	},
	name: {
		type: GraphQLString,
		description: 'A portion of name in any name part (See http://hl7.org/fhir/SearchParameter/relatedperson-name).'
	},
	birthdate: {
		type: DateScalar,
		description: 'The Related Person\'s date of birth (See http://hl7.org/fhir/SearchParameter/relatedperson-birthdate).'
	},
	telecom: {
		type: TokenScalar,
		description: 'The value in any kind of contact (See http://hl7.org/fhir/SearchParameter/relatedperson-telecom).'
	},
	gender: {
		type: TokenScalar,
		description: 'Gender of the person (See http://hl7.org/fhir/SearchParameter/relatedperson-gender).'
	},
	identifier: {
		type: TokenScalar,
		description: 'A patient Identifier (See http://hl7.org/fhir/SearchParameter/relatedperson-identifier).'
	},
	address_postalcode: {
		type: GraphQLString,
		description: 'A postal code specified in an address (See http://hl7.org/fhir/SearchParameter/relatedperson-address-postalcode).'
	}
};
