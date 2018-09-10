const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the devicemetric query
 */
module.exports = {
	parent: {
		type: GraphQLString,
		description: 'The parent DeviceMetric resource (See http://hl7.org/fhir/SearchParameter/DeviceMetric-parent).'
	},
	identifier: {
		type: TokenScalar,
		description: 'The identifier of the metric (See http://hl7.org/fhir/SearchParameter/DeviceMetric-identifier).'
	},
	source: {
		type: GraphQLString,
		description: 'The device resource (See http://hl7.org/fhir/SearchParameter/DeviceMetric-source).'
	},
	type: {
		type: TokenScalar,
		description: 'The component type (See http://hl7.org/fhir/SearchParameter/DeviceMetric-type).'
	},
	category: {
		type: TokenScalar,
		description: 'The category of the metric (See http://hl7.org/fhir/SearchParameter/DeviceMetric-category).'
	}
};
