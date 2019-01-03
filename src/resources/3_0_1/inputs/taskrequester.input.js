const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Task.requester Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TaskRequester_Input',
	description: 'The creator of the task.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			agent: {
				type: new GraphQLNonNull(require('./reference.input')),
				description: 'The device, practitioner, etc. who initiated the task.',
			},
			onBehalfOf: {
				type: require('./reference.input'),
				description:
					'The organization the device or practitioner was acting on behalf of when they initiated the task.',
			},
		}),
});
