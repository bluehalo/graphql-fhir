const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Procedure.performer Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcedurePerformer',
	description: "Limited to 'real' people rather than equipment.",
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/performer-role
			role: {
				type: require('./codeableconcept.schema'),
				description: 'For example: surgeon, anaethetist, endoscopist.',
			},
			actor: {
				type: new GraphQLNonNull(require('./reference.schema')),
				description: 'The practitioner who was involved in the procedure.',
			},
			onBehalfOf: {
				type: require('./reference.schema'),
				description:
					'The organization the device or practitioner was acting on behalf of.',
			},
		}),
});
