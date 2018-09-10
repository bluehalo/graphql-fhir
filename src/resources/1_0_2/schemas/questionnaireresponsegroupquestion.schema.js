const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary QuestionnaireResponse.group.question Schema
 */
module.exports = new GraphQLObjectType({
	name: 'QuestionnaireResponseGroupQuestion',
	description: 'Set of questions within this group. The order of questions within the group is relevant.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		linkId: {
			type: GraphQLString,
			description: 'Identifies the question from the Questionnaire that corresponds to this question in the QuestionnaireResponse resource.'
		},
		_linkId: {
			type: require('./element.schema'),
			description: 'Identifies the question from the Questionnaire that corresponds to this question in the QuestionnaireResponse resource.'
		},
		text: {
			type: GraphQLString,
			description: 'The actual question as shown to the user to prompt them for an answer.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'The actual question as shown to the user to prompt them for an answer.'
		},
		answer: {
			type: new GraphQLList(require('./questionnaireresponsegroupquestionanswer.schema')),
			description: 'The respondent\'s answer(s) to the question.'
		}
	})
});
