const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the location query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Location-address
	address: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Location.address',
		description: 'A (part of the) address of the location',
	},
	// http://hl7.org/fhir/SearchParameter/Location-address-city
	address_city: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Location.address.city',
		description: 'A city specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Location-address-country
	address_country: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Location.address.country',
		description: 'A country specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Location-address-postalcode
	address_postalcode: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Location.address.postalCode',
		description: 'A postal code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Location-address-state
	address_state: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Location.address.state',
		description: 'A state specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Location-address-use
	address_use: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Location.address.use',
		description: 'A use code specified in an address',
	},
	// http://hl7.org/fhir/SearchParameter/Location-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Location.identifier',
		description: 'Unique code or number identifying the location to its users',
	},
	// http://hl7.org/fhir/SearchParameter/Location-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Location.name',
		description: 'A (portion of the) name of the location',
	},
	// http://hl7.org/fhir/SearchParameter/Location-near
	near: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Location.position',
		description:
			'The coordinates expressed as [lat],[long] (using the WGS84 datum, see notes) to find locations near to (servers may search using a square rather than a circle for efficiency)',
	},
	// http://hl7.org/fhir/SearchParameter/Location-near-distance
	near_distance: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Location.position',
		description:
			'A distance quantity to limit the near search to locations within a specific distance',
	},
	// http://hl7.org/fhir/SearchParameter/Location-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Location.managingOrganization',
		description:
			'Searches for locations that are managed by the provided organization',
	},
	// http://hl7.org/fhir/SearchParameter/Location-partof
	partof: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Location.partOf',
		description: 'The location of which this location is a part',
	},
	// http://hl7.org/fhir/SearchParameter/Location-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Location.status',
		description: 'Searches for locations with a specific kind of status',
	},
	// http://hl7.org/fhir/SearchParameter/Location-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Location.type',
		description: 'A code for the type of location',
	},
};
