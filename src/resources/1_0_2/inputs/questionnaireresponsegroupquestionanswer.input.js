const {
	GraphQLList,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInt,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const InstantScalar = require('../scalars/instant.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary QuestionnaireResponsegroupquestionanswer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireResponsegroupquestionanswer_Input',
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
		_valueBoolean: {
			type: require('./element.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		_valueDecimal: {
			type: require('./element.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueDecimal: {
			type: GraphQLFloat,
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		_valueInteger: {
			type: require('./element.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueInteger: {
			type: GraphQLInt,
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		_valueDate: {
			type: require('./element.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueDate: {
			type: DateScalar,
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		_valueDateTime: {
			type: require('./element.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueDateTime: {
			type: DateTimeScalar,
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		_valueInstant: {
			type: require('./element.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueInstant: {
			type: InstantScalar,
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		_valueTime: {
			type: require('./element.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueTime: {
			type: TimeScalar,
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		_valueString: {
			type: require('./element.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueString: {
			type: GraphQLString,
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		_valueUri: {
			type: require('./element.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueUri: {
			type: UriScalar,
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueAttachment: {
			type: require('./attachment.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueCoding: {
			type: require('./coding.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueQuantity: {
			type: require('./quantity.input.js'),
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
		valueReference: {
			type: GraphQLString,
			description:
				'The answer (or one of the answers) provided by the respondent to the question.',
		},
	}),
});
