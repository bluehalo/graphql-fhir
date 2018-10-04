const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary EpisodeOfCare.diagnosis Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EpisodeOfCareDiagnosis_Input',
	description: 'The list of diagnosis relevant to this episode of care.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		condition: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/diagnosis-role
		role: {
			type: require('./codeableconcept.input'),
			description: 'Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).'
		},
		rank: {
			type: PositiveIntScalar,
			description: 'Ranking of the diagnosis (for each role type).'
		},
		_rank: {
			type: require('./element.input'),
			description: 'Ranking of the diagnosis (for each role type).'
		}
	})
});
