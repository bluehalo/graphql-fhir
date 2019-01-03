const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ResearchStudy.arm Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ResearchStudyArm',
	description: 'Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Unique, human-readable label for this arm of the study.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'Unique, human-readable label for this arm of the study.'
		},
		code: {
			type: require('./codeableconcept.schema'),
			description: 'Categorization of study arm, e.g. experimental, active comparator, placebo comparater.'
		},
		description: {
			type: GraphQLString,
			description: 'A succinct description of the path through the study that would be followed by a subject adhering to this arm.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A succinct description of the path through the study that would be followed by a subject adhering to this arm.'
		}
	})
});
