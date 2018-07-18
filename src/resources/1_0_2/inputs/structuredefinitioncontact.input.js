const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary StructureDefinitionContact Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureDefinitionContact_Input',
	description: 'Contacts to assist a user in finding and communicating with the publisher.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: GraphQLString,
			description: 'The name of an individual to contact regarding the structure definition.'
		},
		_name: {
			type: require('./element.input'),
			description: 'The name of an individual to contact regarding the structure definition.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'Contact details for individual (if a name was provided) or the publisher.'
		}
	})
});
