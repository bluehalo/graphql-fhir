const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the person query
 */
module.exports = {
	phone: {
		type: TokenScalar,
		description: 'A value in a phone contact. See http://hl7.org/fhir/SearchParameter/person-phone.'
	},
	phonetic: {
		type: GraphQLString,
		description: 'A portion of name using some kind of phonetic matching algorithm. See http://hl7.org/fhir/SearchParameter/person-phonetic.'
	},
	link: {
		type: GraphQLString,
		description: 'Any link has this Patient, Person, RelatedPerson or Practitioner reference. See http://hl7.org/fhir/SearchParameter/person-link.'
	},
	address_country: {
		type: GraphQLString,
		description: 'A country specified in an address. See http://hl7.org/fhir/SearchParameter/person-address-country.'
	},
	relatedperson: {
		type: GraphQLString,
		description: 'The Person links to this RelatedPerson. See http://hl7.org/fhir/SearchParameter/person-relatedperson.'
	},
	organization: {
		type: GraphQLString,
		description: 'The organization at which this person record is being managed. See http://hl7.org/fhir/SearchParameter/person-organization.'
	},
	patient: {
		type: GraphQLString,
		description: 'The Person links to this Patient. See http://hl7.org/fhir/SearchParameter/person-patient.'
	},
	address_city: {
		type: GraphQLString,
		description: 'A city specified in an address. See http://hl7.org/fhir/SearchParameter/person-address-city.'
	},
	address_state: {
		type: GraphQLString,
		description: 'A state specified in an address. See http://hl7.org/fhir/SearchParameter/person-address-state.'
	},
	practitioner: {
		type: GraphQLString,
		description: 'The Person links to this Practitioner. See http://hl7.org/fhir/SearchParameter/person-practitioner.'
	},
	email: {
		type: TokenScalar,
		description: 'A value in an email contact. See http://hl7.org/fhir/SearchParameter/person-email.'
	},
	address: {
		type: GraphQLString,
		description: 'An address in any kind of address/part. See http://hl7.org/fhir/SearchParameter/person-address.'
	},
	address_use: {
		type: TokenScalar,
		description: 'A use code specified in an address. See http://hl7.org/fhir/SearchParameter/person-address-use.'
	},
	name: {
		type: GraphQLString,
		description: 'A portion of name in any name part. See http://hl7.org/fhir/SearchParameter/person-name.'
	},
	birthdate: {
		type: DateScalar,
		description: 'The person\'s date of birth. See http://hl7.org/fhir/SearchParameter/person-birthdate.'
	},
	telecom: {
		type: TokenScalar,
		description: 'The value in any kind of contact. See http://hl7.org/fhir/SearchParameter/person-telecom.'
	},
	gender: {
		type: TokenScalar,
		description: 'The gender of the person. See http://hl7.org/fhir/SearchParameter/person-gender.'
	},
	identifier: {
		type: TokenScalar,
		description: 'A person Identifier. See http://hl7.org/fhir/SearchParameter/person-identifier.'
	},
	address_postalcode: {
		type: GraphQLString,
		description: 'A postal code specified in an address. See http://hl7.org/fhir/SearchParameter/person-address-postalcode.'
	}
};
