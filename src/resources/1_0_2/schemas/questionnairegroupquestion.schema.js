const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary QuestionnaireGroupQuestion Schema
 */
module.exports = new GraphQLObjectType({
	name: 'QuestionnaireGroupQuestion',
	description: 'Set of questions within this group. The order of questions within the group is relevant.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		linkId: {
			type: GraphQLString,
			description: 'An identifier that is unique within the questionnaire allowing linkage to the equivalent group in a [[[QuestionnaireResponse]]] resource.'
		},
		_linkId: {
			type: require('./element.schema'),
			description: 'An identifier that is unique within the questionnaire allowing linkage to the equivalent group in a [[[QuestionnaireResponse]]] resource.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-questions
		concept: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'Identifies a how this question is known in a particular terminology such as LOINC.'
		},
		text: {
			type: GraphQLString,
			description: 'The actual question as shown to the user to prompt them for an answer.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'The actual question as shown to the user to prompt them for an answer.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/answer-format
		type: {
			type: CodeScalar,
			description: 'The expected format of the answer, e.g. the type of input (string, integer) or whether a (multiple) choice is expected.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The expected format of the answer, e.g. the type of input (string, integer) or whether a (multiple) choice is expected.'
		},
		required: {
			type: GraphQLBoolean,
			description: 'If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.'
		},
		_required: {
			type: require('./element.schema'),
			description: 'If true, indicates that the question must be answered and have required groups within it also present.  If false, the question and any contained groups may be skipped when answering the questionnaire.'
		},
		repeats: {
			type: GraphQLBoolean,
			description: 'If true, the question may have more than one answer.'
		},
		_repeats: {
			type: require('./element.schema'),
			description: 'If true, the question may have more than one answer.'
		},
		options: {
			type: require('./reference.schema'),
			description: 'Reference to a value set containing a list of codes representing permitted answers for the question.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		option: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'For a \'choice\' question, identifies one of the permitted answers for the question.'
		}
	})
});
