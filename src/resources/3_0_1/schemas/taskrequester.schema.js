const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Task.requester Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TaskRequester',
	description: 'The creator of the task.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		agent: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The device, practitioner, etc. who initiated the task.'
		},
		onBehalfOf: {
			type: require('./reference.schema'),
			description: 'The organization the device or practitioner was acting on behalf of when they initiated the task.'
		}
	})
});
