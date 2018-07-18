const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary QuestionnaireResponseItem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireResponseItem_Input',
	description: 'A group or question item from the original questionnaire for which answers are provided.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		linkId: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.'
		},
		_linkId: {
			type: require('./element.input'),
			description: 'The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.'
		},
		definition: {
			type: UriScalar,
			description: 'A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item.'
		},
		_definition: {
			type: require('./element.input'),
			description: 'A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item.'
		},
		text: {
			type: GraphQLString,
			description: 'Text that is displayed above the contents of the group or as the text of the question being answered.'
		},
		_text: {
			type: require('./element.input'),
			description: 'Text that is displayed above the contents of the group or as the text of the question being answered.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'More specific subject this section\'s answers are about, details the subject given in QuestionnaireResponse.'
		},
		answer: {
			type: new GraphQLList(require('./questionnaireresponseitemanswer.input')),
			description: 'The respondent\'s answer(s) to the question.'
		}
	})
});
