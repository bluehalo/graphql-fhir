const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DeviceComponentProductionSpecification Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DeviceComponentProductionSpecification_Input',
	description: 'The production specification such as component revision, serial number, etc.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/specification-type
		specType: {
			type: require('./codeableconcept.input'),
			description: 'The specification type, such as, serial number, part number, hardware revision, software revision, etc.'
		},
		componentId: {
			type: require('./identifier.input'),
			description: 'The internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacturer can make use of.'
		},
		productionSpec: {
			type: GraphQLString,
			description: 'The printable string defining the component.'
		},
		_productionSpec: {
			type: require('./element.input'),
			description: 'The printable string defining the component.'
		}
	})
});
