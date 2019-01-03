const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MedicationRequest.requester Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationRequestRequester',
	description: 'The individual, organization or device that initiated the request and has responsibility for its activation.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		agent: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The healthcare professional responsible for authorizing the initial prescription.'
		},
		onBehalfOf: {
			type: require('./reference.schema'),
			description: 'The organization the device or practitioner was acting on behalf of.'
		}
	})
});
