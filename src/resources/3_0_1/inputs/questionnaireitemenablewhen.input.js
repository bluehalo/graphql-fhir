const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const TimeScalar = require('../scalars/time.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLInt } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Questionnaire.item.enableWhen Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireItemEnableWhen_Input',
	description: 'A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		question: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.'
		},
		_question: {
			type: require('./element.input'),
			description: 'The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.'
		},
		hasAnswer: {
			type: GraphQLBoolean,
			description: 'An indication that this item should be enabled only if the specified question is answered (hasAnswer=true) or not answered (hasAnswer=false).'
		},
		_hasAnswer: {
			type: require('./element.input'),
			description: 'An indication that this item should be enabled only if the specified question is answered (hasAnswer=true) or not answered (hasAnswer=false).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerBoolean: {
			type: GraphQLBoolean,
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		_answerBoolean: {
			type: require('./element.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerDecimal: {
			type: GraphQLFloat,
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		_answerDecimal: {
			type: require('./element.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerInteger: {
			type: GraphQLInt,
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		_answerInteger: {
			type: require('./element.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerDate: {
			type: DateScalar,
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		_answerDate: {
			type: require('./element.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerDateTime: {
			type: DateTimeScalar,
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		_answerDateTime: {
			type: require('./element.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerTime: {
			type: TimeScalar,
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		_answerTime: {
			type: require('./element.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerString: {
			type: GraphQLString,
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		_answerString: {
			type: require('./element.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerUri: {
			type: UriScalar,
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		_answerUri: {
			type: require('./element.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerAttachment: {
			type: require('./attachment.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerCoding: {
			type: require('./coding.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerQuantity: {
			type: require('./quantity.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerReference: {
			type: require('./reference.input'),
			description: 'An answer that the referenced question must match in order for the item to be enabled.'
		}
	})
});
