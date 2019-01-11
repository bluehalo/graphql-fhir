const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');

/**
 * @name exports
 * @summary QuestionnaireitemenableWhen Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireitemenableWhen_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_question: {
			type: require('./element.input.js'),
			description:
				'The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.',
		},
		question: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.',
		},
		_operator: {
			type: require('./element.input.js'),
			description: 'Specifies the criteria by which the question is enabled.',
		},
		operator: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Specifies the criteria by which the question is enabled.',
		},
		_answerBoolean: {
			type: require('./element.input.js'),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		answerBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		_answerDecimal: {
			type: require('./element.input.js'),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		answerDecimal: {
			type: new GraphQLNonNull(GraphQLFloat),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		_answerInteger: {
			type: require('./element.input.js'),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		answerInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		_answerDate: {
			type: require('./element.input.js'),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		answerDate: {
			type: new GraphQLNonNull(DateScalar),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		_answerDateTime: {
			type: require('./element.input.js'),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		answerDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		_answerTime: {
			type: require('./element.input.js'),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		answerTime: {
			type: new GraphQLNonNull(TimeScalar),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		_answerString: {
			type: require('./element.input.js'),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		answerString: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		answerCoding: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		answerQuantity: {
			type: new GraphQLNonNull(require('./quantity.input.js')),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
		answerReference: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A value that the referenced question is tested using the specified operator in order for the item to be enabled.',
		},
	}),
});
