const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the insuranceplan query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-address
	address: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'InsurancePlan.contact.address',
		description:
			'A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text',
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-address-city
	address_city: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'InsurancePlan.contact.address.city',
		description: 'A city specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-address-country
	address_country: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'InsurancePlan.contact.address.country',
		description: 'A country specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-address-postalcode
	address_postalcode: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'InsurancePlan.contact.address.postalCode',
		description: 'A postal code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-address-state
	address_state: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'InsurancePlan.contact.address.state',
		description: 'A state specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-address-use
	address_use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'InsurancePlan.contact.address.use',
		description: 'A use code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-administered-by
	administered_by: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'InsurancePlan.administeredBy',
		description: 'Product administrator',
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-endpoint
	endpoint: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'InsurancePlan.endpoint',
		description: 'Technical endpoint',
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'InsurancePlan.identifier',
		description:
			"Any identifier for the organization (not the accreditation issuer's identifier)",
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'InsurancePlan.name',
		description: "A portion of the organization's name or alias",
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-owned-by
	owned_by: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'InsurancePlan.ownedBy',
		description: 'An organization of which this organization forms a part',
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-phonetic
	phonetic: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'InsurancePlan.name',
		description:
			"A portion of the organization's name using some kind of phonetic matching algorithm",
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'InsurancePlan.status',
		description: 'Is the Organization record active',
	},
	// http://hl7.org/fhir/SearchParameter/InsurancePlan-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'InsurancePlan.type',
		description: 'A code for the type of organization',
	},
};
