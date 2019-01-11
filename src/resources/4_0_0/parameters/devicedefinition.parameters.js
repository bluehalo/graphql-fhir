const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the devicedefinition query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/DeviceDefinition-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DeviceDefinition.identifier',
		description: 'The identifier of the component',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceDefinition-parent
	parent: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'DeviceDefinition.parentDevice',
		description: 'The parent DeviceDefinition resource',
	},
	// http://hl7.org/fhir/SearchParameter/DeviceDefinition-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'DeviceDefinition.type',
		description: 'The device component type',
	},
};
