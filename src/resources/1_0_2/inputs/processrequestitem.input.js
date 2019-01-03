const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLInt,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ProcessRequest.item Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcessRequestItem_Input',
	description:
		'List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			sequenceLinkId: {
				type: new GraphQLNonNull(GraphQLInt),
				description: 'A service line number.',
			},
			_sequenceLinkId: {
				type: require('./element.input'),
				description: 'A service line number.',
			},
		}),
});
