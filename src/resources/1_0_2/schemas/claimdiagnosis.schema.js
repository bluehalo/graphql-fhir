const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ClaimDiagnosis Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimDiagnosis',
	description: 'Ordered list of patient diagnosis for which care is sought.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'Sequence of diagnosis which serves to order and provide a link.'
		},
		_sequence: {
			type: require('./element.schema'),
			description: 'Sequence of diagnosis which serves to order and provide a link.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/icd-10
		diagnosis: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'The diagnosis.'
		}
	})
});
