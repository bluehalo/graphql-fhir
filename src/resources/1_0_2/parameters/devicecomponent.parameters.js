const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the devicecomponent query
 */
module.exports = {
	source: {
		type: GraphQLString,
		description:
			'The device source (See http://hl7.org/fhir/SearchParameter/devicecomponent-source).',
	},
	parent: {
		type: GraphQLString,
		description:
			'The parent DeviceComponent resource (See http://hl7.org/fhir/SearchParameter/devicecomponent-parent).',
	},
	type: {
		type: TokenScalar,
		description:
			'The device component type (See http://hl7.org/fhir/SearchParameter/devicecomponent-type).',
	},
};
