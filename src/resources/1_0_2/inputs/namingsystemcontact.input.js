const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary NamingSystem.contact Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NamingSystemContact_Input',
	description: 'Contacts to assist a user in finding and communicating with the publisher.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		name: {
			type: GraphQLString,
			description: 'The name of an individual to contact regarding the naming system.'
		},
		_name: {
			type: require('./element.input'),
			description: 'The name of an individual to contact regarding the naming system.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'Contact details for individual (if a name was provided) or the publisher.'
		}
	})
});
