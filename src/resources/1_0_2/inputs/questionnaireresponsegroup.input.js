const {
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary QuestionnaireResponsegroup Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireResponsegroup_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_linkId: {
			type: require('./element.input.js'),
			description:
				'Identifies the group from the Questionnaire that corresponds to this group in the QuestionnaireResponse resource.',
		},
		linkId: {
			type: GraphQLString,
			description:
				'Identifies the group from the Questionnaire that corresponds to this group in the QuestionnaireResponse resource.',
		},
		_title: {
			type: require('./element.input.js'),
			description: 'Text that is displayed above the contents of the group.',
		},
		title: {
			type: GraphQLString,
			description: 'Text that is displayed above the contents of the group.',
		},
		_text: {
			type: require('./element.input.js'),
			description: 'Additional text for the group, used for display purposes.',
		},
		text: {
			type: GraphQLString,
			description: 'Additional text for the group, used for display purposes.',
		},
		subject: {
			type: GraphQLString,
			description:
				"More specific subject this section's answers are about, details the subject given in QuestionnaireResponse.",
		},
		question: {
			type: new GraphQLList(
				require('./questionnaireresponsegroupquestion.input.js'),
			),
			description:
				'Set of questions within this group. The order of questions within the group is relevant.',
		},
	}),
});
