const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the person query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Person-address
	address: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Person.address',
		description: 'An address in any kind of address/part',
	},
	// http://hl7.org/fhir/SearchParameter/Person-address-city
	address_city: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Person.address.city',
		description: 'A city specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Person-address-country
	address_country: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Person.address.country',
		description: 'A country specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Person-address-postalcode
	address_postalcode: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Person.address.postalCode',
		description: 'A postal code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Person-address-state
	address_state: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Person.address.state',
		description: 'A state specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Person-address-use
	address_use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Person.address.use',
		description: 'A use code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Person-birthdate
	birthdate: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Person.birthDate',
		description: "The person's date of birth",
	},
	// http://hl7.org/fhir/SearchParameter/Person-email
	email: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "Person.telecom[system/@value='email']",
		description: 'A value in an email contact',
	},
	// http://hl7.org/fhir/SearchParameter/Person-gender
	gender: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Person.gender',
		description: 'The gender of the person',
	},
	// http://hl7.org/fhir/SearchParameter/Person-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Person.identifier',
		description: 'A person Identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Person-link
	link: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Person.link.target',
		description:
			'Any link has this Patient, Person, RelatedPerson or Practitioner reference',
	},
	// http://hl7.org/fhir/SearchParameter/Person-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Person.name',
		description: 'A portion of name in any name part',
	},
	// http://hl7.org/fhir/SearchParameter/Person-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Person.managingOrganization',
		description:
			'The organization at which this person record is being managed',
	},
	// http://hl7.org/fhir/SearchParameter/Person-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Person.link.target',
		description: 'The Person links to this Patient',
	},
	// http://hl7.org/fhir/SearchParameter/Person-phone
	phone: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: "Person.telecom[system/@value='phone']",
		description: 'A value in a phone contact',
	},
	// http://hl7.org/fhir/SearchParameter/Person-phonetic
	phonetic: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Person.name',
		description:
			'A portion of name using some kind of phonetic matching algorithm',
	},
	// http://hl7.org/fhir/SearchParameter/Person-practitioner
	practitioner: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Person.link.target',
		description: 'The Person links to this Practitioner',
	},
	// http://hl7.org/fhir/SearchParameter/Person-relatedperson
	relatedperson: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Person.link.target',
		description: 'The Person links to this RelatedPerson',
	},
	// http://hl7.org/fhir/SearchParameter/Person-telecom
	telecom: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Person.telecom',
		description: 'The value in any kind of contact',
	},
};
