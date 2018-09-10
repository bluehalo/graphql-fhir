const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Consent.actor Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConsentActor_Input',
	description: 'Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/security-role-type
		role: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'How the individual is involved in the resources content that is described in the consent.'
		},
		reference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. \'admitting officers\').'
		}
	})
});
