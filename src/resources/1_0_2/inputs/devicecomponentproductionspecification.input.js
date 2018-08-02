const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DeviceComponentProductionSpecification Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DeviceComponentProductionSpecification_Input',
	description: 'Describes the production specification such as component revision, serial number, etc.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		specType: {
			type: require('./codeableconcept.input'),
			description: 'Describes the specification type, such as, serial number, part number, hardware revision, software revision, etc.'
		},
		componentId: {
			type: require('./identifier.input'),
			description: 'Describes the internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacture can make use of.'
		},
		productionSpec: {
			type: GraphQLString,
			description: 'Describes the printable string defining the component.'
		},
		_productionSpec: {
			type: require('./element.input'),
			description: 'Describes the printable string defining the component.'
		}
	})
});
