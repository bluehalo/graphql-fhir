const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Claim.diagnosis Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimDiagnosis_Input',
	description: 'Ordered list of patient diagnosis for which care is sought.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'Sequence of diagnosis which serves to order and provide a link.'
		},
		_sequence: {
			type: require('./element.input'),
			description: 'Sequence of diagnosis which serves to order and provide a link.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/icd-10
		diagnosis: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The diagnosis.'
		}
	})
});
