const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary MedicationAdministrationPerformer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MedicationAdministrationPerformer_Input',
	description: 'The individual who was responsible for giving the medication to the patient.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		actor: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The device, practitioner, etc. who performed the action.'
		},
		onBehalfOf: {
			type: require('./reference.input'),
			description: 'The organization the device or practitioner was acting on behalf of.'
		}
	})
});
