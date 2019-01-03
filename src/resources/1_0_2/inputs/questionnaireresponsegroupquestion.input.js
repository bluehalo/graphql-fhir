const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary QuestionnaireResponse.group.question Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireResponseGroupQuestion_Input',
	description: 'Set of questions within this group. The order of questions within the group is relevant.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		linkId: {
			type: GraphQLString,
			description: 'Identifies the question from the Questionnaire that corresponds to this question in the QuestionnaireResponse resource.'
		},
		_linkId: {
			type: require('./element.input'),
			description: 'Identifies the question from the Questionnaire that corresponds to this question in the QuestionnaireResponse resource.'
		},
		text: {
			type: GraphQLString,
			description: 'The actual question as shown to the user to prompt them for an answer.'
		},
		_text: {
			type: require('./element.input'),
			description: 'The actual question as shown to the user to prompt them for an answer.'
		},
		answer: {
			type: new GraphQLList(require('./questionnaireresponsegroupquestionanswer.input')),
			description: 'The respondent\'s answer(s) to the question.'
		}
	})
});
