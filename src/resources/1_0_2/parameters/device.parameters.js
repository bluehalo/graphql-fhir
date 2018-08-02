const TokenScalar = require('../scalars/token.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the device query
 */
module.exports = {
	organization: {
		type: GraphQLString,
		description: 'The organization responsible for the device. See http://hl7.org/fhir/SearchParameter/device-organization.'
	},
	model: {
		type: GraphQLString,
		description: 'The model of the device. See http://hl7.org/fhir/SearchParameter/device-model.'
	},
	patient: {
		type: GraphQLString,
		description: 'Patient information, if the resource is affixed to a person. See http://hl7.org/fhir/SearchParameter/device-patient.'
	},
	location: {
		type: GraphQLString,
		description: 'A location, where the resource is found. See http://hl7.org/fhir/SearchParameter/device-location.'
	},
	manufacturer: {
		type: GraphQLString,
		description: 'The manufacturer of the device. See http://hl7.org/fhir/SearchParameter/device-manufacturer.'
	},
	udi: {
		type: GraphQLString,
		description: 'FDA mandated Unique Device Identifier. See http://hl7.org/fhir/SearchParameter/device-udi.'
	},
	type: {
		type: TokenScalar,
		description: 'The type of the device. See http://hl7.org/fhir/SearchParameter/device-type.'
	},
	identifier: {
		type: TokenScalar,
		description: 'Instance id from manufacturer, owner, and others. See http://hl7.org/fhir/SearchParameter/device-identifier.'
	},
	url: {
		type: UriScalar,
		description: 'Network address to contact device. See http://hl7.org/fhir/SearchParameter/device-url.'
	}
};
