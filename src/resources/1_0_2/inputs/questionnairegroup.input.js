const {
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Questionnairegroup Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Questionnairegroup_Input',
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
				'An identifier that is unique within the Questionnaire allowing linkage to the equivalent group in a QuestionnaireResponse resource.',
		},
		linkId: {
			type: GraphQLString,
			description:
				'An identifier that is unique within the Questionnaire allowing linkage to the equivalent group in a QuestionnaireResponse resource.',
		},
		_title: {
			type: require('./element.input.js'),
			description:
				'The human-readable name for this section of the questionnaire.',
		},
		title: {
			type: GraphQLString,
			description:
				'The human-readable name for this section of the questionnaire.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-questions
		concept: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'Identifies a how this group of questions is known in a particular terminology such as LOINC.',
		},
		_text: {
			type: require('./element.input.js'),
			description: 'Additional text for the group, used for display purposes.',
		},
		text: {
			type: GraphQLString,
			description: 'Additional text for the group, used for display purposes.',
		},
		_required: {
			type: require('./element.input.js'),
			description:
				'If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.',
		},
		required: {
			type: GraphQLBoolean,
			description:
				'If true, indicates that the group must be present and have required questions within it answered.  If false, the group may be skipped when answering the questionnaire.',
		},
		_repeats: {
			type: require('./element.input.js'),
			description:
				'Whether the group may occur multiple times in the instance, containing multiple sets of answers.',
		},
		repeats: {
			type: GraphQLBoolean,
			description:
				'Whether the group may occur multiple times in the instance, containing multiple sets of answers.',
		},
		question: {
			type: new GraphQLList(require('./questionnairegroupquestion.input.js')),
			description:
				'Set of questions within this group. The order of questions within the group is relevant.',
		},
	}),
});
