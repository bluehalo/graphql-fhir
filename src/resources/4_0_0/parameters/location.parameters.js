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
		type: GraphQLString,
		fhirtype: 'special',
		xpath: 'Location.position',
		description:
			'Search for locations where the location.position is near to, or within a specified distance of, the provided coordinates expressed as [latitude]|[longitude]|[distance]|[units] (using the WGS84 datum, see notes). If the units are omitted, then kms should be assumed. If the distance is omitted, then the server can use its own discretion as to what distances should be considered near (and units are irrelevant)  Servers may search using various techniques that might have differing accuracies, depending on implementation efficiency.  Requires the near-distance parameter to be provided also',
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
