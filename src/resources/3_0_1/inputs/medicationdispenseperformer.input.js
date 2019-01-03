const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MedicationDispense.performer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationDispensePerformer_Input',
	description: 'Indicates who or what performed the event.  It should be assumed that the performer is the dispenser of the medication.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		actor: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the medication.'
		},
		onBehalfOf: {
			type: require('./reference.input'),
			description: 'The organization the device or practitioner was acting on behalf of.'
		}
	})
});
