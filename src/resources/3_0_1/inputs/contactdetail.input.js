const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ContactDetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContactDetail_Input',
	description: 'Base StructureDefinition for ContactDetail Type.',
	fields: () => extendSchema(require('./element.input'), {
		name: {
			type: GraphQLString,
			description: 'The name of an individual to contact.'
		},
		_name: {
			type: require('./element.input'),
			description: 'The name of an individual to contact.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'The contact details for the individual (if a name was provided) or the organization.'
		}
	})
});
