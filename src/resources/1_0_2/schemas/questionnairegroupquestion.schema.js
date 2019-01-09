const {
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Questionnairegroupquestion Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Questionnairegroupquestion',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_linkId: {
			type: require('./element.schema.js'),
			description:
				'An identifier that is unique within the questionnaire allowing linkage to the equivalent group in a [[[QuestionnaireResponse]]] resource.',
		},
		linkId: {
			type: GraphQLString,
			description:
				'An identifier that is unique within the questionnaire allowing linkage to the equivalent group in a [[[QuestionnaireResponse]]] resource.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-questions
		concept: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'Identifies a how this question is known in a particular terminology such as LOINC.',
		},
		_text: {
			type: require('./element.schema.js'),
			description:
				'The actual question as shown to the user to prompt them for an answer.',
		},
		text: {
			type: GraphQLString,
			description:
				'The actual question as shown to the user to prompt them for an answer.',
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'The expected format of the answer, e.g. the type of input (string, integer) or whether a (multiple) choice is expected.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/answer-format
		type: {
			type: CodeScalar,
			description:
				'The expected format of the answer, e.g. the type of input (string, integer) or whether a (multiple) choice is expected.',
		},
		_required: {
			type: require('./element.schema.js'),
			description:
				'If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.',
		},
		required: {
			type: GraphQLBoolean,
			description:
				'If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.',
		},
		_repeats: {
			type: require('./element.schema.js'),
			description: 'If true, the question may have more than one answer.',
		},
		repeats: {
			type: GraphQLBoolean,
			description: 'If true, the question may have more than one answer.',
		},
		options: {
			type: new GraphQLUnionType({
				name: 'Questionnairegroupquestionoptions_options_Union',
				description:
					'Reference to a value set containing a list of codes representing permitted answers for the question.',
				types: () => [require('./valueset.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'ValueSet') {
						return require('./valueset.schema.js');
					}
				},
			}),
			description:
				'Reference to a value set containing a list of codes representing permitted answers for the question.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		option: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				"For a 'choice' question, identifies one of the permitted answers for the question.",
		},
	}),
});
