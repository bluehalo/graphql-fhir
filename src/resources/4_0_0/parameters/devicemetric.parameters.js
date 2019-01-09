const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the devicemetric query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DeviceMetric-category
	category: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DeviceMetric.category',
		description: 'The category of the metric',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceMetric-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DeviceMetric.identifier',
		description: 'The identifier of the metric',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceMetric-parent
	parent: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceMetric.parent',
		description: 'The parent DeviceMetric resource',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceMetric-source
	source: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceMetric.source',
		description: 'The device resource',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceMetric-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DeviceMetric.type',
		description: 'The component type',
	},
};
