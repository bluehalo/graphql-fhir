const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the devicecomponent query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DeviceComponent-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DeviceComponent.identifier',
		description: 'The identifier of the component',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceComponent-parent
	parent: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceComponent.parent',
		description: 'The parent DeviceComponent resource',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceComponent-source
	source: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceComponent.source',
		description: 'The device source',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceComponent-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DeviceComponent.type',
		description: 'The device component type',
	},
};
