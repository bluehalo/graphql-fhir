const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');

/**
 * @name exports
 * @summary Questionnaireitem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Questionnaireitem_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
				'An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.',
		},
		linkId: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.',
		},
		_definition: {
			type: require('./element.input.js'),
			description:
				'A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item. If a definition is provided, then the following element values can be inferred from the definition:   * code (ElementDefinition.code) * type (ElementDefinition.type) * required (ElementDefinition.min) * repeats (ElementDefinition.max) * maxLength (ElementDefinition.maxLength) * options (ElementDefinition.binding)  Any information provided in these elements on a Questionnaire Item overrides the information from the definition.',
		},
		definition: {
			type: UriScalar,
			description:
				'A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item. If a definition is provided, then the following element values can be inferred from the definition:   * code (ElementDefinition.code) * type (ElementDefinition.type) * required (ElementDefinition.min) * repeats (ElementDefinition.max) * maxLength (ElementDefinition.maxLength) * options (ElementDefinition.binding)  Any information provided in these elements on a Questionnaire Item overrides the information from the definition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-questions
		code: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).',
		},
		_prefix: {
			type: require('./element.input.js'),
			description:
				'A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.',
		},
		prefix: {
			type: GraphQLString,
			description:
				'A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.',
		},
		_text: {
			type: require('./element.input.js'),
			description:
				'The name of a section, the text of a question or text content for a display item.',
		},
		text: {
			type: GraphQLString,
			description:
				'The name of a section, the text of a question or text content for a display item.',
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/item-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).',
		},
		enableWhen: {
			type: new GraphQLList(require('./questionnaireitemenablewhen.input.js')),
			description:
				'A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.',
		},
		_required: {
			type: require('./element.input.js'),
			description:
				"An indication, if true, that the item must be present in a 'completed' QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.",
		},
		required: {
			type: GraphQLBoolean,
			description:
				"An indication, if true, that the item must be present in a 'completed' QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.",
		},
		_repeats: {
			type: require('./element.input.js'),
			description:
				'An indication, if true, that the item may occur multiple times in the response, collecting multiple answers answers for questions or multiple sets of answers for groups.',
		},
		repeats: {
			type: GraphQLBoolean,
			description:
				'An indication, if true, that the item may occur multiple times in the response, collecting multiple answers answers for questions or multiple sets of answers for groups.',
		},
		_readOnly: {
			type: require('./element.input.js'),
			description:
				'An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.',
		},
		readOnly: {
			type: GraphQLBoolean,
			description:
				'An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.',
		},
		_maxLength: {
			type: require('./element.input.js'),
			description:
				"The maximum number of characters that are permitted in the answer to be considered a 'valid' QuestionnaireResponse.",
		},
		maxLength: {
			type: GraphQLInt,
			description:
				"The maximum number of characters that are permitted in the answer to be considered a 'valid' QuestionnaireResponse.",
		},
		options: {
			type: GraphQLString,
			description:
				"A reference to a value set containing a list of codes representing permitted answers for a 'choice' or 'open-choice' question.",
		},
		option: {
			type: new GraphQLList(require('./questionnaireitemoption.input.js')),
			description:
				"One of the permitted answers for a 'choice' or 'open-choice' question.",
		},
		_initialBoolean: {
			type: require('./element.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialBoolean: {
			type: GraphQLBoolean,
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		_initialDecimal: {
			type: require('./element.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialDecimal: {
			type: GraphQLFloat,
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		_initialInteger: {
			type: require('./element.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialInteger: {
			type: GraphQLInt,
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		_initialDate: {
			type: require('./element.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialDate: {
			type: DateScalar,
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		_initialDateTime: {
			type: require('./element.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialDateTime: {
			type: DateTimeScalar,
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		_initialTime: {
			type: require('./element.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialTime: {
			type: TimeScalar,
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		_initialString: {
			type: require('./element.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialString: {
			type: GraphQLString,
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		_initialUri: {
			type: require('./element.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialUri: {
			type: UriScalar,
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialAttachment: {
			type: require('./attachment.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialCoding: {
			type: require('./coding.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialQuantity: {
			type: require('./quantity.input.js'),
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		initialReference: {
			type: GraphQLString,
			description:
				'The value that should be defaulted when initially rendering the questionnaire for user input.',
		},
	}),
});
