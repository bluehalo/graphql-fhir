const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the practitioner query
 */
module.exports = {
	phone: {
		type: TokenScalar,
		description: 'A value in a phone contact. See http://hl7.org/fhir/SearchParameter/practitioner-phone.'
	},
	phonetic: {
		type: GraphQLString,
		description: 'A portion of either family or given name using some kind of phonetic matching algorithm. See http://hl7.org/fhir/SearchParameter/practitioner-phonetic.'
	},
	location: {
		type: GraphQLString,
		description: 'One of the locations at which this practitioner provides care. See http://hl7.org/fhir/SearchParameter/practitioner-location.'
	},
	communication: {
		type: TokenScalar,
		description: 'One of the languages that the practitioner can communicate with. See http://hl7.org/fhir/SearchParameter/practitioner-communication.'
	},
	address_country: {
		type: GraphQLString,
		description: 'A country specified in an address. See http://hl7.org/fhir/SearchParameter/practitioner-address-country.'
	},
	organization: {
		type: GraphQLString,
		description: 'The identity of the organization the practitioner represents / acts on behalf of. See http://hl7.org/fhir/SearchParameter/practitioner-organization.'
	},
	address_city: {
		type: GraphQLString,
		description: 'A city specified in an address. See http://hl7.org/fhir/SearchParameter/practitioner-address-city.'
	},
	address_state: {
		type: GraphQLString,
		description: 'A state specified in an address. See http://hl7.org/fhir/SearchParameter/practitioner-address-state.'
	},
	given: {
		type: GraphQLString,
		description: 'A portion of the given name. See http://hl7.org/fhir/SearchParameter/practitioner-given.'
	},
	email: {
		type: TokenScalar,
		description: 'A value in an email contact. See http://hl7.org/fhir/SearchParameter/practitioner-email.'
	},
	address: {
		type: GraphQLString,
		description: 'An address in any kind of address/part. See http://hl7.org/fhir/SearchParameter/practitioner-address.'
	},
	address_use: {
		type: TokenScalar,
		description: 'A use code specified in an address. See http://hl7.org/fhir/SearchParameter/practitioner-address-use.'
	},
	family: {
		type: GraphQLString,
		description: 'A portion of the family name. See http://hl7.org/fhir/SearchParameter/practitioner-family.'
	},
	name: {
		type: GraphQLString,
		description: 'A portion of either family or given name. See http://hl7.org/fhir/SearchParameter/practitioner-name.'
	},
	telecom: {
		type: TokenScalar,
		description: 'The value in any kind of contact. See http://hl7.org/fhir/SearchParameter/practitioner-telecom.'
	},
	role: {
		type: TokenScalar,
		description: 'The practitioner can perform this role at for the organization. See http://hl7.org/fhir/SearchParameter/practitioner-role.'
	},
	gender: {
		type: TokenScalar,
		description: 'Gender of the practitioner. See http://hl7.org/fhir/SearchParameter/practitioner-gender.'
	},
	specialty: {
		type: TokenScalar,
		description: 'The practitioner has this specialty at an organization. See http://hl7.org/fhir/SearchParameter/practitioner-specialty.'
	},
	identifier: {
		type: TokenScalar,
		description: 'A practitioner\'s Identifier. See http://hl7.org/fhir/SearchParameter/practitioner-identifier.'
	},
	address_postalcode: {
		type: GraphQLString,
		description: 'A postalCode specified in an address. See http://hl7.org/fhir/SearchParameter/practitioner-address-postalcode.'
	}
};
