const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the devicemetric query
 */
module.exports = {
	category: {
		type: TokenScalar,
		description: 'The category of the metric. See http://hl7.org/fhir/SearchParameter/devicemetric-category.'
	},
	source: {
		type: GraphQLString,
		description: 'The device resource. See http://hl7.org/fhir/SearchParameter/devicemetric-source.'
	},
	parent: {
		type: GraphQLString,
		description: 'The parent DeviceMetric resource. See http://hl7.org/fhir/SearchParameter/devicemetric-parent.'
	},
	type: {
		type: TokenScalar,
		description: 'The component type. See http://hl7.org/fhir/SearchParameter/devicemetric-type.'
	},
	identifier: {
		type: TokenScalar,
		description: 'The identifier of the metric. See http://hl7.org/fhir/SearchParameter/devicemetric-identifier.'
	}
};
