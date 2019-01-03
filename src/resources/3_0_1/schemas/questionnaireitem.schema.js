const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const TimeScalar = require('../scalars/time.scalar');
const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLFloat,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Questionnaire.item Schema
 */
module.exports = new GraphQLObjectType({
	name: 'QuestionnaireItem',
	description:
		'A particular question, question grouping or display text that is part of the questionnaire.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			linkId: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.',
			},
			_linkId: {
				type: require('./element.schema'),
				description:
					'An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.',
			},
			definition: {
				type: UriScalar,
				description:
					'A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item. If a definition is provided, then the following element values can be inferred from the definition:   * code (ElementDefinition.code) * type (ElementDefinition.type) * required (ElementDefinition.min) * repeats (ElementDefinition.max) * maxLength (ElementDefinition.maxLength) * options (ElementDefinition.binding)  Any information provided in these elements on a Questionnaire Item overrides the information from the definition.',
			},
			_definition: {
				type: require('./element.schema'),
				description:
					'A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item. If a definition is provided, then the following element values can be inferred from the definition:   * code (ElementDefinition.code) * type (ElementDefinition.type) * required (ElementDefinition.min) * repeats (ElementDefinition.max) * maxLength (ElementDefinition.maxLength) * options (ElementDefinition.binding)  Any information provided in these elements on a Questionnaire Item overrides the information from the definition.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-questions
			code: {
				type: new GraphQLList(require('./coding.schema')),
				description:
					'A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).',
			},
			prefix: {
				type: GraphQLString,
				description:
					'A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.',
			},
			_prefix: {
				type: require('./element.schema'),
				description:
					'A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.',
			},
			text: {
				type: GraphQLString,
				description:
					'The name of a section, the text of a question or text content for a display item.',
			},
			_text: {
				type: require('./element.schema'),
				description:
					'The name of a section, the text of a question or text content for a display item.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/item-type
			type: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).',
			},
			_type: {
				type: require('./element.schema'),
				description:
					'The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).',
			},
			enableWhen: {
				type: new GraphQLList(require('./questionnaireitemenablewhen.schema')),
				description:
					'A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.',
			},
			required: {
				type: GraphQLBoolean,
				description:
					"An indication, if true, that the item must be present in a 'completed' QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.",
			},
			_required: {
				type: require('./element.schema'),
				description:
					"An indication, if true, that the item must be present in a 'completed' QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.",
			},
			repeats: {
				type: GraphQLBoolean,
				description:
					'An indication, if true, that the item may occur multiple times in the response, collecting multiple answers answers for questions or multiple sets of answers for groups.',
			},
			_repeats: {
				type: require('./element.schema'),
				description:
					'An indication, if true, that the item may occur multiple times in the response, collecting multiple answers answers for questions or multiple sets of answers for groups.',
			},
			readOnly: {
				type: GraphQLBoolean,
				description:
					'An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.',
			},
			_readOnly: {
				type: require('./element.schema'),
				description:
					'An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.',
			},
			maxLength: {
				type: GraphQLInt,
				description:
					"The maximum number of characters that are permitted in the answer to be considered a 'valid' QuestionnaireResponse.",
			},
			_maxLength: {
				type: require('./element.schema'),
				description:
					"The maximum number of characters that are permitted in the answer to be considered a 'valid' QuestionnaireResponse.",
			},
			options: {
				type: require('./reference.schema'),
				description:
					"A reference to a value set containing a list of codes representing permitted answers for a 'choice' or 'open-choice' question.",
			},
			option: {
				type: new GraphQLList(require('./questionnaireitemoption.schema')),
				description:
					"One of the permitted answers for a 'choice' or 'open-choice' question.",
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialBoolean: {
				type: GraphQLBoolean,
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			_initialBoolean: {
				type: require('./element.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialDecimal: {
				type: GraphQLFloat,
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			_initialDecimal: {
				type: require('./element.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialInteger: {
				type: GraphQLInt,
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			_initialInteger: {
				type: require('./element.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialDate: {
				type: DateScalar,
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			_initialDate: {
				type: require('./element.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialDateTime: {
				type: DateTimeScalar,
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			_initialDateTime: {
				type: require('./element.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialTime: {
				type: TimeScalar,
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			_initialTime: {
				type: require('./element.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialString: {
				type: GraphQLString,
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			_initialString: {
				type: require('./element.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialUri: {
				type: UriScalar,
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			_initialUri: {
				type: require('./element.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialAttachment: {
				type: require('./attachment.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialCoding: {
				type: require('./coding.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialQuantity: {
				type: require('./quantity.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
			initialReference: {
				type: require('./reference.schema'),
				description:
					'The value that should be defaulted when initially rendering the questionnaire for user input.',
			},
		}),
});
