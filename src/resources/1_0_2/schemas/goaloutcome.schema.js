const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary GoalOutcome Schema
 */
module.exports = new GraphQLObjectType({
	name: 'GoalOutcome',
	description: 'Identifies the change (or lack of change) at the point where the goal was deepmed to be cancelled or achieved.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		resultCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Details of what\'s changed (or not changed).'
		},
		resultReference: {
			type: require('./reference.schema'),
			description: 'Details of what\'s changed (or not changed).'
		}
	})
});
