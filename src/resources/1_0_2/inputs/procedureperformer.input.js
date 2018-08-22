const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ProcedurePerformer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcedurePerformer_Input',
	description: 'Limited to \'real\' people rather than equipment.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		actor: {
			type: require('./reference.input'),
			description: 'The practitioner who was involved in the procedure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/performer-role
		role: {
			type: require('./codeableconcept.input'),
			description: 'For example: surgeon, anaethetist, endoscopist.'
		}
	})
});
