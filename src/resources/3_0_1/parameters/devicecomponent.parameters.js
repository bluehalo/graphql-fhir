const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the devicecomponent query
 */
module.exports = {
	parent: {
		type: GraphQLString,
		description: 'The parent DeviceComponent resource. See http://hl7.org/fhir/SearchParameter/DeviceComponent-parent.'
	},
	identifier: {
		type: TokenScalar,
		description: 'The identifier of the component. See http://hl7.org/fhir/SearchParameter/DeviceComponent-identifier.'
	},
	source: {
		type: GraphQLString,
		description: 'The device source. See http://hl7.org/fhir/SearchParameter/DeviceComponent-source.'
	},
	type: {
		type: TokenScalar,
		description: 'The device component type. See http://hl7.org/fhir/SearchParameter/DeviceComponent-type.'
	}
};
