const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLBoolean } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Claim.careTeam Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimCareTeam_Input',
	description: 'The members of the team who provided the overall service as well as their role and whether responsible and qualifications.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'Sequence of the careTeam which serves to order and provide a link.'
		},
		_sequence: {
			type: require('./element.input'),
			description: 'Sequence of the careTeam which serves to order and provide a link.'
		},
		provider: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Member of the team who provided the overall service.'
		},
		responsible: {
			type: GraphQLBoolean,
			description: 'The party who is billing and responsible for the claimed good or service rendered to the patient.'
		},
		_responsible: {
			type: require('./element.input'),
			description: 'The party who is billing and responsible for the claimed good or service rendered to the patient.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-careteamrole
		role: {
			type: require('./codeableconcept.input'),
			description: 'The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/provider-qualification
		qualification: {
			type: require('./codeableconcept.input'),
			description: 'The qualification which is applicable for this service.'
		}
	})
});
