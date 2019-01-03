const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Consent.except.actor Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConsentExceptActor_Input',
	description: 'Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/security-role-type
		role: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'How the individual is involved in the resources content that is described in the exception.'
		},
		reference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. \'admitting officers\').'
		}
	})
});
