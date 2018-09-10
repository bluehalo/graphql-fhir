const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Immunization.practitioner Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImmunizationPractitioner',
	description: 'Indicates who or what performed the event.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/immunization-role
		role: {
			type: require('./codeableconcept.schema'),
			description: 'Describes the type of performance (e.g. ordering provider, administering provider, etc.).'
		},
		actor: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The device, practitioner, etc. who performed the action.'
		}
	})
});
