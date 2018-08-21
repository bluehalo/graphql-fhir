const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary EpisodeOfCareDiagnosis Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EpisodeOfCareDiagnosis',
	description: 'The list of diagnosis relevant to this episode of care.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		condition: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/diagnosis-role
		role: {
			type: require('./codeableconcept.schema'),
			description: 'Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).'
		},
		rank: {
			type: PositiveIntScalar,
			description: 'Ranking of the diagnosis (for each role type).'
		},
		_rank: {
			type: require('./element.schema'),
			description: 'Ranking of the diagnosis (for each role type).'
		}
	})
});
