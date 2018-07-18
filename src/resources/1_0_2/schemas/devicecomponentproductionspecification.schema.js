const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DeviceComponentProductionSpecification Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceComponentProductionSpecification',
	description: 'Describes the production specification such as component revision, serial number, etc.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		specType: {
			type: require('./codeableconcept.schema'),
			description: 'Describes the specification type, such as, serial number, part number, hardware revision, software revision, etc.'
		},
		componentId: {
			type: require('./identifier.schema'),
			description: 'Describes the internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacture can make use of.'
		},
		productionSpec: {
			type: GraphQLString,
			description: 'Describes the printable string defining the component.'
		},
		_productionSpec: {
			type: require('./element.schema'),
			description: 'Describes the printable string defining the component.'
		}
	})
});
