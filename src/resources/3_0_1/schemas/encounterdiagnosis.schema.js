const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary EncounterDiagnosis Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EncounterDiagnosis',
	description: 'The list of diagnosis relevant to this encounter.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		condition: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/diagnosis-role
		role: {
			type: require('./codeableconcept.schema'),
			description: 'Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).'
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
