const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ConsentExceptActor Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConsentExceptActor',
	description: 'Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/security-role-type
		role: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'How the individual is involved in the resources content that is described in the exception.'
		},
		reference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. \'admitting officers\').'
		}
	})
});
