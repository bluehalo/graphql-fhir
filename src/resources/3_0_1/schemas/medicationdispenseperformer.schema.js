const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary MedicationDispensePerformer Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationDispensePerformer',
	description: 'Indicates who or what performed the event.  It should be assumed that the performer is the dispenser of the medication.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		actor: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.'
		},
		onBehalfOf: {
			type: require('./reference.schema'),
			description: 'The organization the device or practitioner was acting on behalf of.'
		}
	})
});
