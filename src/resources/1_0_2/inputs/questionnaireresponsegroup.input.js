const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary QuestionnaireResponse.group Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireResponseGroup_Input',
	description: 'A group of questions to a possibly similarly grouped set of questions in the questionnaire response.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		linkId: {
			type: GraphQLString,
			description: 'Identifies the group from the Questionnaire that corresponds to this group in the QuestionnaireResponse resource.'
		},
		_linkId: {
			type: require('./element.input'),
			description: 'Identifies the group from the Questionnaire that corresponds to this group in the QuestionnaireResponse resource.'
		},
		title: {
			type: GraphQLString,
			description: 'Text that is displayed above the contents of the group.'
		},
		_title: {
			type: require('./element.input'),
			description: 'Text that is displayed above the contents of the group.'
		},
		text: {
			type: GraphQLString,
			description: 'Additional text for the group, used for display purposes.'
		},
		_text: {
			type: require('./element.input'),
			description: 'Additional text for the group, used for display purposes.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'More specific subject this section\'s answers are about, details the subject given in QuestionnaireResponse.'
		},
		question: {
			type: new GraphQLList(require('./questionnaireresponsegroupquestion.input')),
			description: 'Set of questions within this group. The order of questions within the group is relevant.'
		}
	})
});
