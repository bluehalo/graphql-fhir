const { GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Questionnaire.group Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireGroup_Input',
	description: 'A collection of related questions (or further groupings of questions).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		linkId: {
			type: GraphQLString,
			description: 'An identifier that is unique within the Questionnaire allowing linkage to the equivalent group in a QuestionnaireResponse resource.'
		},
		_linkId: {
			type: require('./element.input'),
			description: 'An identifier that is unique within the Questionnaire allowing linkage to the equivalent group in a QuestionnaireResponse resource.'
		},
		title: {
			type: GraphQLString,
			description: 'The human-readable name for this section of the questionnaire.'
		},
		_title: {
			type: require('./element.input'),
			description: 'The human-readable name for this section of the questionnaire.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-questions
		concept: {
			type: new GraphQLList(require('./coding.input')),
			description: 'Identifies a how this group of questions is known in a particular terminology such as LOINC.'
		},
		text: {
			type: GraphQLString,
			description: 'Additional text for the group, used for display purposes.'
		},
		_text: {
			type: require('./element.input'),
			description: 'Additional text for the group, used for display purposes.'
		},
		required: {
			type: GraphQLBoolean,
			description: 'If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.'
		},
		_required: {
			type: require('./element.input'),
			description: 'If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.'
		},
		repeats: {
			type: GraphQLBoolean,
			description: 'Whether the group may occur multiple times in the instance, containing multiple sets of answers.'
		},
		_repeats: {
			type: require('./element.input'),
			description: 'Whether the group may occur multiple times in the instance, containing multiple sets of answers.'
		},
		question: {
			type: new GraphQLList(require('./questionnairegroupquestion.input')),
			description: 'Set of questions within this group. The order of questions within the group is relevant.'
		}
	})
});
