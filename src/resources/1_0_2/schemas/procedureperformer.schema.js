const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Procedure.performer Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcedurePerformer',
	description: 'Limited to \'real\' people rather than equipment.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		actor: {
			type: require('./reference.schema'),
			description: 'The practitioner who was involved in the procedure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/performer-role
		role: {
			type: require('./codeableconcept.schema'),
			description: 'For example: surgeon, anaethetist, endoscopist.'
		}
	})
});
