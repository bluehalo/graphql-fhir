const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ExplanationOfBenefitCareTeam Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitCareTeam',
	description: 'The members of the team who provided the overall service as well as their role and whether responsible and qualifications.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'Sequence of careteam which serves to order and provide a link.'
		},
		_sequence: {
			type: require('./element.schema'),
			description: 'Sequence of careteam which serves to order and provide a link.'
		},
		provider: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The members of the team who provided the overall service.'
		},
		responsible: {
			type: GraphQLBoolean,
			description: 'The practitioner who is billing and responsible for the claimed services rendered to the patient.'
		},
		_responsible: {
			type: require('./element.schema'),
			description: 'The practitioner who is billing and responsible for the claimed services rendered to the patient.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/claim-careteamrole
		role: {
			type: require('./codeableconcept.schema'),
			description: 'The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/provider-qualification
		qualification: {
			type: require('./codeableconcept.schema'),
			description: 'The qualification which is applicable for this service.'
		}
	})
});
