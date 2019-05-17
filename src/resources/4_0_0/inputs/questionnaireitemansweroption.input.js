const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');

/**
 * @name exports
 * @summary QuestionnaireitemanswerOption Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireitemanswerOption_Input',
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
		_valueInteger: {
			type: require('./element.input.js'),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		valueInteger: {
			type: GraphQLInt,
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		_valueDate: {
			type: require('./element.input.js'),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		valueDate: {
			type: DateScalar,
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		_valueTime: {
			type: require('./element.input.js'),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		valueTime: {
			type: TimeScalar,
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		_valueString: {
			type: require('./element.input.js'),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		valueString: {
			type: GraphQLString,
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		valueCoding: {
			type: new require('./coding.input.js'),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		valueReference: {
			type: GraphQLString,
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		_initialSelected: {
			type: require('./element.input.js'),
			description:
				'Indicates whether the answer value is selected when the list of possible answers is initially shown.',
		},
		initialSelected: {
			type: GraphQLBoolean,
			description:
				'Indicates whether the answer value is selected when the list of possible answers is initially shown.',
		},
	}),
});
