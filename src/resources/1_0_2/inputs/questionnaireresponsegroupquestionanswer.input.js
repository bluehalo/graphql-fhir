const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const TimeScalar = require('../scalars/time.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary QuestionnaireResponseGroupQuestionAnswer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireResponseGroupQuestionAnswer_Input',
	description: 'The respondent\'s answer(s) to the question.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueBoolean: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueDecimal: {
			type: GraphQLFloat,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueDecimal: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueInteger: {
			type: GraphQLInt,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueInteger: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueDate: {
			type: DateScalar,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueDate: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueDateTime: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueInstant: {
			type: InstantScalar,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueInstant: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueTime: {
			type: TimeScalar,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueTime: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueString: {
			type: GraphQLString,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueString: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueUri: {
			type: UriScalar,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueUri: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueAttachment: {
			type: require('./attachment.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueCoding: {
			type: require('./coding.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueQuantity: {
			type: require('./quantity.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		valueReference: {
			type: require('./reference.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		}
	})
});
