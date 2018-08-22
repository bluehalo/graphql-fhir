const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TaskRestriction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TaskRestriction',
	description: 'If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		repetitions: {
			type: PositiveIntScalar,
			description: 'Indicates the number of times the requested action should occur.'
		},
		_repetitions: {
			type: require('./element.schema'),
			description: 'Indicates the number of times the requested action should occur.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Over what time-period is fulfillment sought.'
		},
		recipient: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?.'
		}
	})
});
