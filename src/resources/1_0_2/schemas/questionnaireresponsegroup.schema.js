const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary QuestionnaireResponse.group Schema
 */
module.exports = new GraphQLObjectType({
	name: 'QuestionnaireResponseGroup',
	description:
		'A group of questions to a possibly similarly grouped set of questions in the questionnaire response.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			linkId: {
				type: GraphQLString,
				description:
					'Identifies the group from the Questionnaire that corresponds to this group in the QuestionnaireResponse resource.',
			},
			_linkId: {
				type: require('./element.schema'),
				description:
					'Identifies the group from the Questionnaire that corresponds to this group in the QuestionnaireResponse resource.',
			},
			title: {
				type: GraphQLString,
				description: 'Text that is displayed above the contents of the group.',
			},
			_title: {
				type: require('./element.schema'),
				description: 'Text that is displayed above the contents of the group.',
			},
			text: {
				type: GraphQLString,
				description:
					'Additional text for the group, used for display purposes.',
			},
			_text: {
				type: require('./element.schema'),
				description:
					'Additional text for the group, used for display purposes.',
			},
			subject: {
				type: require('./reference.schema'),
				description:
					"More specific subject this section's answers are about, details the subject given in QuestionnaireResponse.",
			},
			question: {
				type: new GraphQLList(
					require('./questionnaireresponsegroupquestion.schema'),
				),
				description:
					'Set of questions within this group. The order of questions within the group is relevant.',
			},
		}),
});
