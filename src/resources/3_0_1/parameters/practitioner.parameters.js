const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the practitioner query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'A practitioner\'s Identifier. See http://hl7.org/fhir/SearchParameter/Practitioner-identifier.'
	},
	given: {
		type: GraphQLString,
		description: 'A portion of the given name. See http://hl7.org/fhir/SearchParameter/individual-given.'
	},
	address: {
		type: GraphQLString,
		description: 'A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text. See http://hl7.org/fhir/SearchParameter/individual-address.'
	},
	address_state: {
		type: GraphQLString,
		description: 'A state specified in an address. See http://hl7.org/fhir/SearchParameter/individual-address-state.'
	},
	gender: {
		type: TokenScalar,
		description: 'Gender of the practitioner. See http://hl7.org/fhir/SearchParameter/individual-gender.'
	},
	active: {
		type: TokenScalar,
		description: 'Whether the practitioner record is active. See http://hl7.org/fhir/SearchParameter/Practitioner-active.'
	},
	address_postalcode: {
		type: GraphQLString,
		description: 'A postalCode specified in an address. See http://hl7.org/fhir/SearchParameter/individual-address-postalcode.'
	},
	address_country: {
		type: GraphQLString,
		description: 'A country specified in an address. See http://hl7.org/fhir/SearchParameter/individual-address-country.'
	},
	phonetic: {
		type: GraphQLString,
		description: 'A portion of either family or given name using some kind of phonetic matching algorithm. See http://hl7.org/fhir/SearchParameter/individual-phonetic.'
	},
	phone: {
		type: TokenScalar,
		description: 'A value in a phone contact. See http://hl7.org/fhir/SearchParameter/individual-phone.'
	},
	name: {
		type: GraphQLString,
		description: 'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text. See http://hl7.org/fhir/SearchParameter/Practitioner-name.'
	},
	address_use: {
		type: TokenScalar,
		description: 'A use code specified in an address. See http://hl7.org/fhir/SearchParameter/individual-address-use.'
	},
	telecom: {
		type: TokenScalar,
		description: 'The value in any kind of contact. See http://hl7.org/fhir/SearchParameter/individual-telecom.'
	},
	family: {
		type: GraphQLString,
		description: 'A portion of the family name. See http://hl7.org/fhir/SearchParameter/individual-family.'
	},
	address_city: {
		type: GraphQLString,
		description: 'A city specified in an address. See http://hl7.org/fhir/SearchParameter/individual-address-city.'
	},
	communication: {
		type: TokenScalar,
		description: 'One of the languages that the practitioner can communicate with. See http://hl7.org/fhir/SearchParameter/Practitioner-communication.'
	},
	email: {
		type: TokenScalar,
		description: 'A value in an email contact. See http://hl7.org/fhir/SearchParameter/individual-email.'
	}
};
