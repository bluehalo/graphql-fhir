const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MedicationRequest.requester Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationRequestRequester_Input',
	description: 'The individual, organization or device that initiated the request and has responsibility for its activation.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		agent: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The healthcare professional responsible for authorizing the initial prescription.'
		},
		onBehalfOf: {
			type: require('./reference.input'),
			description: 'The organization the device or practitioner was acting on behalf of.'
		}
	})
});
