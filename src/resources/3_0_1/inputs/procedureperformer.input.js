const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ProcedurePerformer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcedurePerformer_Input',
	description: 'Limited to \'real\' people rather than equipment.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/performer-role
		role: {
			type: require('./codeableconcept.input'),
			description: 'For example: surgeon, anaethetist, endoscopist.'
		},
		actor: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The practitioner who was involved in the procedure.'
		},
		onBehalfOf: {
			type: require('./reference.input'),
			description: 'The organization the device or practitioner was acting on behalf of.'
		}
	})
});
