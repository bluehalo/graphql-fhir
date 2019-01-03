const {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary SearchParameter.contact Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SearchParameterContact_Input',
	description:
		'Contacts to assist a user in finding and communicating with the publisher.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			name: {
				type: GraphQLString,
				description:
					'The name of an individual to contact regarding the search parameter.',
			},
			_name: {
				type: require('./element.input'),
				description:
					'The name of an individual to contact regarding the search parameter.',
			},
			telecom: {
				type: new GraphQLList(require('./contactpoint.input')),
				description:
					'Contact details for individual (if a name was provided) or the publisher.',
			},
		}),
});
