const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the location query
 */
module.exports = {
	organization: {
		type: GraphQLString,
		description: 'Searches for locations that are managed by the provided organization (See http://hl7.org/fhir/SearchParameter/location-organization).'
	},
	address_state: {
		type: GraphQLString,
		description: 'A state specified in an address (See http://hl7.org/fhir/SearchParameter/location-address-state).'
	},
	address_city: {
		type: GraphQLString,
		description: 'A city specified in an address (See http://hl7.org/fhir/SearchParameter/location-address-city).'
	},
	near: {
		type: TokenScalar,
		description: 'The coordinates expressed as [lat],[long] (using the WGS84 datum, see notes) to find locations near to (servers may search using a square rather than a circle for efficiency) (See http://hl7.org/fhir/SearchParameter/location-near).'
	},
	partof: {
		type: GraphQLString,
		description: 'The location of which this location is a part (See http://hl7.org/fhir/SearchParameter/location-partof).'
	},
	status: {
		type: TokenScalar,
		description: 'Searches for locations with a specific kind of status (See http://hl7.org/fhir/SearchParameter/location-status).'
	},
	address: {
		type: GraphQLString,
		description: 'A (part of the) address of the location (See http://hl7.org/fhir/SearchParameter/location-address).'
	},
	address_use: {
		type: TokenScalar,
		description: 'A use code specified in an address (See http://hl7.org/fhir/SearchParameter/location-address-use).'
	},
	name: {
		type: GraphQLString,
		description: 'A (portion of the) name of the location (See http://hl7.org/fhir/SearchParameter/location-name).'
	},
	address_country: {
		type: GraphQLString,
		description: 'A country specified in an address (See http://hl7.org/fhir/SearchParameter/location-address-country).'
	},
	near_distance: {
		type: TokenScalar,
		description: 'A distance quantity to limit the near search to locations within a specific distance (See http://hl7.org/fhir/SearchParameter/location-near-distance).'
	},
	type: {
		type: TokenScalar,
		description: 'A code for the type of location (See http://hl7.org/fhir/SearchParameter/location-type).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Unique code or number identifying the location to its users (See http://hl7.org/fhir/SearchParameter/location-identifier).'
	},
	address_postalcode: {
		type: GraphQLString,
		description: 'A postal code specified in an address (See http://hl7.org/fhir/SearchParameter/location-address-postalcode).'
	}
};
