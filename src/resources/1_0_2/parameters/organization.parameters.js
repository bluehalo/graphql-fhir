const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the organization query
 */
module.exports = {
	address_state: {
		type: GraphQLString,
		description: 'A state specified in an address (See http://hl7.org/fhir/SearchParameter/organization-address-state).'
	},
	address_city: {
		type: GraphQLString,
		description: 'A city specified in an address (See http://hl7.org/fhir/SearchParameter/organization-address-city).'
	},
	phonetic: {
		type: GraphQLString,
		description: 'A portion of the organization\'s name using some kind of phonetic matching algorithm (See http://hl7.org/fhir/SearchParameter/organization-phonetic).'
	},
	partof: {
		type: GraphQLString,
		description: 'Search all organizations that are part of the given organization (See http://hl7.org/fhir/SearchParameter/organization-partof).'
	},
	address: {
		type: GraphQLString,
		description: 'A (part of the) address of the Organization (See http://hl7.org/fhir/SearchParameter/organization-address).'
	},
	address_use: {
		type: TokenScalar,
		description: 'A use code specified in an address (See http://hl7.org/fhir/SearchParameter/organization-address-use).'
	},
	name: {
		type: GraphQLString,
		description: 'A portion of the organization\'s name (See http://hl7.org/fhir/SearchParameter/organization-name).'
	},
	address_country: {
		type: GraphQLString,
		description: 'A country specified in an address (See http://hl7.org/fhir/SearchParameter/organization-address-country).'
	},
	active: {
		type: TokenScalar,
		description: 'Whether the organization\'s record is active (See http://hl7.org/fhir/SearchParameter/organization-active).'
	},
	type: {
		type: TokenScalar,
		description: 'A code for the type of organization (See http://hl7.org/fhir/SearchParameter/organization-type).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Any identifier for the organization (not the accreditation issuer\'s identifier) (See http://hl7.org/fhir/SearchParameter/organization-identifier).'
	},
	address_postalcode: {
		type: GraphQLString,
		description: 'A postal code specified in an address (See http://hl7.org/fhir/SearchParameter/organization-address-postalcode).'
	}
};
