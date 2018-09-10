const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the location query
 */
module.exports = {
	identifier: {
		type: TokenScalar,
		description: 'An identifier for the location (See http://hl7.org/fhir/SearchParameter/Location-identifier).'
	},
	partof: {
		type: GraphQLString,
		description: 'A location of which this location is a part (See http://hl7.org/fhir/SearchParameter/Location-partof).'
	},
	near_distance: {
		type: GraphQLString,
		description: 'A distance quantity to limit the near search to locations within a specific distance  Requires the near parameter to also be included (See http://hl7.org/fhir/SearchParameter/Location-near-distance).'
	},
	address: {
		type: GraphQLString,
		description: 'A (part of the) address of the location (See http://hl7.org/fhir/SearchParameter/Location-address).'
	},
	address_state: {
		type: GraphQLString,
		description: 'A state specified in an address (See http://hl7.org/fhir/SearchParameter/Location-address-state).'
	},
	operational_status: {
		type: TokenScalar,
		description: 'Searches for locations (typically bed/room) that have an operational status (e.g. contaminated, housekeeping) (See http://hl7.org/fhir/SearchParameter/Location-operational-status).'
	},
	type: {
		type: TokenScalar,
		description: 'A code for the type of location (See http://hl7.org/fhir/SearchParameter/Location-type).'
	},
	address_postalcode: {
		type: GraphQLString,
		description: 'A postal code specified in an address (See http://hl7.org/fhir/SearchParameter/Location-address-postalcode).'
	},
	address_country: {
		type: GraphQLString,
		description: 'A country specified in an address (See http://hl7.org/fhir/SearchParameter/Location-address-country).'
	},
	endpoint: {
		type: GraphQLString,
		description: 'Technical endpoints providing access to services operated for the location (See http://hl7.org/fhir/SearchParameter/Location-endpoint).'
	},
	organization: {
		type: GraphQLString,
		description: 'Searches for locations that are managed by the provided organization (See http://hl7.org/fhir/SearchParameter/Location-organization).'
	},
	name: {
		type: GraphQLString,
		description: 'A portion of the location\'s name or alias (See http://hl7.org/fhir/SearchParameter/Location-name).'
	},
	address_use: {
		type: TokenScalar,
		description: 'A use code specified in an address (See http://hl7.org/fhir/SearchParameter/Location-address-use).'
	},
	near: {
		type: TokenScalar,
		description: 'The coordinates expressed as [latitude]:[longitude] (using the WGS84 datum, see notes) to find locations near to (servers may search using a square rather than a circle for efficiency)  Requires the near-distance parameter to be provided also (See http://hl7.org/fhir/SearchParameter/Location-near).'
	},
	address_city: {
		type: GraphQLString,
		description: 'A city specified in an address (See http://hl7.org/fhir/SearchParameter/Location-address-city).'
	},
	status: {
		type: TokenScalar,
		description: 'Searches for locations with a specific kind of status (See http://hl7.org/fhir/SearchParameter/Location-status).'
	}
};
