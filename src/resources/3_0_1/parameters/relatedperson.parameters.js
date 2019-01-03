const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the relatedperson query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description:
			'An Identifier of the RelatedPerson (See http://hl7.org/fhir/SearchParameter/RelatedPerson-identifier).',
	},
	address: {
		type: GraphQLString,
		description:
			'A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text (See http://hl7.org/fhir/SearchParameter/individual-address).',
	},
	birthdate: {
		type: DateScalar,
		description:
			"The Related Person's date of birth (See http://hl7.org/fhir/SearchParameter/individual-birthdate).",
	},
	address_state: {
		type: GraphQLString,
		description:
			'A state specified in an address (See http://hl7.org/fhir/SearchParameter/individual-address-state).',
	},
	gender: {
		type: TokenScalar,
		description:
			'Gender of the related person (See http://hl7.org/fhir/SearchParameter/individual-gender).',
	},
	active: {
		type: TokenScalar,
		description:
			'Indicates if the related person record is active (See http://hl7.org/fhir/SearchParameter/RelatedPerson-active).',
	},
	address_postalcode: {
		type: GraphQLString,
		description:
			'A postal code specified in an address (See http://hl7.org/fhir/SearchParameter/individual-address-postalcode).',
	},
	address_country: {
		type: GraphQLString,
		description:
			'A country specified in an address (See http://hl7.org/fhir/SearchParameter/individual-address-country).',
	},
	phonetic: {
		type: GraphQLString,
		description:
			'A portion of name using some kind of phonetic matching algorithm (See http://hl7.org/fhir/SearchParameter/individual-phonetic).',
	},
	phone: {
		type: TokenScalar,
		description:
			'A value in a phone contact (See http://hl7.org/fhir/SearchParameter/individual-phone).',
	},
	patient: {
		type: GraphQLString,
		description:
			'The patient this related person is related to (See http://hl7.org/fhir/SearchParameter/RelatedPerson-patient).',
	},
	name: {
		type: GraphQLString,
		description:
			'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text (See http://hl7.org/fhir/SearchParameter/RelatedPerson-name).',
	},
	address_use: {
		type: TokenScalar,
		description:
			'A use code specified in an address (See http://hl7.org/fhir/SearchParameter/individual-address-use).',
	},
	telecom: {
		type: TokenScalar,
		description:
			'The value in any kind of contact (See http://hl7.org/fhir/SearchParameter/individual-telecom).',
	},
	address_city: {
		type: GraphQLString,
		description:
			'A city specified in an address (See http://hl7.org/fhir/SearchParameter/individual-address-city).',
	},
	email: {
		type: TokenScalar,
		description:
			'A value in an email contact (See http://hl7.org/fhir/SearchParameter/individual-email).',
	},
};
