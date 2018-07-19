const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ProcedureRequestRequester Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcedureRequestRequester',
	description: 'The individual who initiated the request and has responsibility for its activation.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		agent: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The device, practitioner or organization who initiated the request.'
		},
		onBehalfOf: {
			type: require('./reference.schema'),
			description: 'The organization the device or practitioner was acting on behalf of.'
		}
	})
});
