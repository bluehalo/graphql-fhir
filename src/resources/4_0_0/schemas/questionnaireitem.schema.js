const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary Questionnaireitem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Questionnaireitem',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_linkId: {
			type: require('./element.schema.js'),
			description:
				'An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.',
		},
		linkId: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.',
		},
		_definition: {
			type: require('./element.schema.js'),
			description:
				'This element is a URI that refers to an [ElementDefinition](elementdefinition.html) that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value:  * code (ElementDefinition.code)  * type (ElementDefinition.type)  * required (ElementDefinition.min)  * repeats (ElementDefinition.max)  * maxLength (ElementDefinition.maxLength)  * answerValueSet (ElementDefinition.binding) * options (ElementDefinition.binding).',
		},
		definition: {
			type: UriScalar,
			description:
				'This element is a URI that refers to an [ElementDefinition](elementdefinition.html) that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value:  * code (ElementDefinition.code)  * type (ElementDefinition.type)  * required (ElementDefinition.min)  * repeats (ElementDefinition.max)  * maxLength (ElementDefinition.maxLength)  * answerValueSet (ElementDefinition.binding) * options (ElementDefinition.binding).',
		},
		code: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).',
		},
		_prefix: {
			type: require('./element.schema.js'),
			description:
				'A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.',
		},
		prefix: {
			type: GraphQLString,
			description:
				'A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.',
		},
		_text: {
			type: require('./element.schema.js'),
			description:
				'The name of a section, the text of a question or text content for a display item.',
		},
		text: {
			type: GraphQLString,
			description:
				'The name of a section, the text of a question or text content for a display item.',
		},
		_type: {
			type: require('./element.schema.js'),
			description:
				'The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).',
		},
		enableWhen: {
			type: new GraphQLList(require('./questionnaireitemenablewhen.schema.js')),
			description:
				'A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.',
		},
		_enableBehavior: {
			type: require('./element.schema.js'),
			description:
				'Controls how multiple enableWhen values are interpreted -  whether all or any must be true.',
		},
		enableBehavior: {
			type: CodeScalar,
			description:
				'Controls how multiple enableWhen values are interpreted -  whether all or any must be true.',
		},
		_required: {
			type: require('./element.schema.js'),
			description:
				"An indication, if true, that the item must be present in a 'completed' QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.",
		},
		required: {
			type: GraphQLBoolean,
			description:
				"An indication, if true, that the item must be present in a 'completed' QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.",
		},
		_repeats: {
			type: require('./element.schema.js'),
			description:
				'An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups.',
		},
		repeats: {
			type: GraphQLBoolean,
			description:
				'An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups.',
		},
		_readOnly: {
			type: require('./element.schema.js'),
			description:
				'An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.',
		},
		readOnly: {
			type: GraphQLBoolean,
			description:
				'An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.',
		},
		_maxLength: {
			type: require('./element.schema.js'),
			description:
				"The maximum number of characters that are permitted in the answer to be considered a 'valid' QuestionnaireResponse.",
		},
		maxLength: {
			type: GraphQLInt,
			description:
				"The maximum number of characters that are permitted in the answer to be considered a 'valid' QuestionnaireResponse.",
		},
		_answerValueSet: {
			type: require('./element.schema.js'),
			description:
				"A reference to a value set containing a list of codes representing permitted answers for a 'choice' or 'open-choice' question.",
		},
		answerValueSet: {
			type: CanonicalScalar,
			description:
				"A reference to a value set containing a list of codes representing permitted answers for a 'choice' or 'open-choice' question.",
		},
		answerOption: {
			type: new GraphQLList(
				require('./questionnaireitemansweroption.schema.js'),
			),
			description:
				"One of the permitted answers for a 'choice' or 'open-choice' question.",
		},
		initial: {
			type: new GraphQLList(require('./questionnaireiteminitial.schema.js')),
			description:
				'One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input.',
		},
	}),
});
