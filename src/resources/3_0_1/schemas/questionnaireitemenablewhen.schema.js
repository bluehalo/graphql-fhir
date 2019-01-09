const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInt,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary QuestionnaireitemenableWhen Schema
 */
module.exports = new GraphQLObjectType({
	name: 'QuestionnaireitemenableWhen',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		_question: {
			type: require('./element.schema.js'),
			description:
				'The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.',
		},
		question: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.',
		},
		_hasAnswer: {
			type: require('./element.schema.js'),
			description:
				'An indication that this item should be enabled only if the specified question is answered (hasAnswer=true) or not answered (hasAnswer=false).',
		},
		hasAnswer: {
			type: GraphQLBoolean,
			description:
				'An indication that this item should be enabled only if the specified question is answered (hasAnswer=true) or not answered (hasAnswer=false).',
		},
		_answerBoolean: {
			type: require('./element.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerBoolean: {
			type: GraphQLBoolean,
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		_answerDecimal: {
			type: require('./element.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerDecimal: {
			type: GraphQLFloat,
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		_answerInteger: {
			type: require('./element.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerInteger: {
			type: GraphQLInt,
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		_answerDate: {
			type: require('./element.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerDate: {
			type: DateScalar,
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		_answerDateTime: {
			type: require('./element.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerDateTime: {
			type: DateTimeScalar,
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		_answerTime: {
			type: require('./element.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerTime: {
			type: TimeScalar,
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		_answerString: {
			type: require('./element.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerString: {
			type: GraphQLString,
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		_answerUri: {
			type: require('./element.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerUri: {
			type: UriScalar,
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerAttachment: {
			type: require('./attachment.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerCoding: {
			type: require('./coding.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		answerReference: {
			type: new GraphQLUnionType({
				name:
					'QuestionnaireitemenableWhenanswerReference_answerReference_Union',
				description:
					'An answer that the referenced question must match in order for the item to be enabled.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'An answer that the referenced question must match in order for the item to be enabled.',
		},
	}),
});
