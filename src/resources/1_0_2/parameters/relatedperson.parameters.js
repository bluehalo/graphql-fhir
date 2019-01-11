const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the relatedperson query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-address
	address: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RelatedPerson.address',
		description: 'An address in any kind of address/part',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-address-city
	address_city: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.city',
		description: 'A city specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-address-country
	address_country: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.country',
		description: 'A country specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-address-postalcode
	address_postalcode: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.postalCode',
		description: 'A postal code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-address-state
	address_state: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RelatedPerson.address.state',
		description: 'A state specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-address-use
	address_use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RelatedPerson.address.use',
		description: 'A use code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-birthdate
	birthdate: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'RelatedPerson.birthDate',
		description: "The Related Person's date of birth",
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-email
	email: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "RelatedPerson.telecom[system/@value='email']",
		description: 'A value in an email contact',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-gender
	gender: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RelatedPerson.gender',
		description: 'Gender of the person',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RelatedPerson.identifier',
		description: 'A patient Identifier',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RelatedPerson.name',
		description: 'A portion of name in any name part',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'RelatedPerson.patient',
		description: 'The patient this person is related to',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-phone
	phone: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "RelatedPerson.telecom[system/@value='phone']",
		description: 'A value in a phone contact',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-phonetic
	phonetic: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'RelatedPerson.name',
		description:
			'A portion of name using some kind of phonetic matching algorithm',
	},
	// http://hl7.org/fhir/SearchParameter/RelatedPerson-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'RelatedPerson.telecom',
		description: 'The value in any kind of contact',
	},
};
