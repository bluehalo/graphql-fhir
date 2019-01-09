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
	// http://hl7.org/fhir/SearchParameter/Location-endpoint
	endpoint: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Location.endpoint',
		description:
			'Technical endpoints providing access to services operated for the location',
	},
	// http://hl7.org/fhir/SearchParameter/Location-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Location.identifier',
		description: 'An identifier for the location',
	},
	// http://hl7.org/fhir/SearchParameter/Location-name
	name: {
		type: GraphQLString,
		fhirtype: 'string',
		xpath: 'Location.name',
		description: "A portion of the location's name or alias",
	},
	// http://hl7.org/fhir/SearchParameter/Location-near
	near: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Location.position',
		description:
			'The coordinates expressed as [latitude]:[longitude] (using the WGS84 datum, see notes) to find locations near to (servers may search using a square rather than a circle for efficiency)  Requires the near-distance parameter to be provided also',
	},
	// http://hl7.org/fhir/SearchParameter/Location-near-distance
	near_distance: {
		type: GraphQLString,
		fhirtype: 'quantity',
		xpath: 'Location.position',
		description:
			'A distance quantity to limit the near search to locations within a specific distance  Requires the near parameter to also be included',
	},
	// http://hl7.org/fhir/SearchParameter/Location-operational-status
	operational_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Location.operationalStatus',
		description:
			'Searches for locations (typically bed/room) that have an operational status (e.g. contaminated, housekeeping)',
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
		description: 'A location of which this location is a part',
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
