const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary SupplyRequest.requester Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SupplyRequestRequester',
	description:
		'The individual who initiated the request and has responsibility for its activation.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			agent: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description:
					'The device, practitioner, etc. who initiated the request.',
			},
			onBehalfOf: {
				type: require('./reference.schema'),
				description:
					'The organization the device or practitioner was acting on behalf of.',
			},
		}),
});
