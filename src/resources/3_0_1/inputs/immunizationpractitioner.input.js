const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Immunization.practitioner Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationPractitioner_Input',
	description: 'Indicates who or what performed the event.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/immunization-role
		role: {
			type: require('./codeableconcept.input'),
			description: 'Describes the type of performance (e.g. ordering provider, administering provider, etc.).'
		},
		actor: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The device, practitioner, etc. who performed the action.'
		}
	})
});
