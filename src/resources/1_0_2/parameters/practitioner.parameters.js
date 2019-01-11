const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the practitioner query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Practitioner-address
	address: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.address',
		description: 'An address in any kind of address/part',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-address-city
	address_city: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.address.city',
		description: 'A city specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-address-country
	address_country: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.address.country',
		description: 'A country specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-address-postalcode
	address_postalcode: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.address.postalCode',
		description: 'A postalCode specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-address-state
	address_state: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.address.state',
		description: 'A state specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-address-use
	address_use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.address.use',
		description: 'A use code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-communication
	communication: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.communication',
		description:
			'One of the languages that the practitioner can communicate with',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-email
	email: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "Practitioner.telecom[system/@value='email']",
		description: 'A value in an email contact',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-family
	family: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.name.family',
		description: 'A portion of the family name',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-gender
	gender: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.gender',
		description: 'Gender of the practitioner',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-given
	given: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.name.given',
		description: 'A portion of the given name',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.identifier',
		description: "A practitioner's Identifier",
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-location
	location: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Practitioner.practitionerRole.location',
		description:
			'One of the locations at which this practitioner provides care',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.name',
		description: 'A portion of either family or given name',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Practitioner.practitionerRole.managingOrganization',
		description:
			'The identity of the organization the practitioner represents / acts on behalf of',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-phone
	phone: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "Practitioner.telecom[system/@value='phone']",
		description: 'A value in a phone contact',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-phonetic
	phonetic: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Practitioner.name',
		description:
			'A portion of either family or given name using some kind of phonetic matching algorithm',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-role
	role: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.practitionerRole.role',
		description:
			'The practitioner can perform this role at for the organization',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-specialty
	specialty: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.practitionerRole.specialty',
		description: 'The practitioner has this specialty at an organization',
	},
	// http://hl7.org/fhir/SearchParameter/Practitioner-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Practitioner.telecom',
		description: 'The value in any kind of contact',
	},
};
