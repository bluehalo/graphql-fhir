const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MedicationAdministration.performer Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationAdministrationPerformer',
	description: 'The individual who was responsible for giving the medication to the patient.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		actor: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The device, practitioner, etc. who performed the action.'
		},
		onBehalfOf: {
			type: require('./reference.schema'),
			description: 'The organization the device or practitioner was acting on behalf of.'
		}
	})
});
