const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const TimeScalar = require('../scalars/time.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLBoolean, GraphQLFloat, GraphQLInt, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary QuestionnaireResponse.item.answer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireResponseItemAnswer_Input',
	description: 'The respondent\'s answer(s) to the question.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueBoolean: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueDecimal: {
			type: GraphQLFloat,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueDecimal: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueInteger: {
			type: GraphQLInt,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueInteger: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueDate: {
			type: DateScalar,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueDate: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueDateTime: {
			type: DateTimeScalar,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueDateTime: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueTime: {
			type: TimeScalar,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueTime: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueString: {
			type: GraphQLString,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueString: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueUri: {
			type: UriScalar,
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		_valueUri: {
			type: require('./element.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueAttachment: {
			type: require('./attachment.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueCoding: {
			type: require('./coding.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueQuantity: {
			type: require('./quantity.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueReference: {
			type: require('./reference.input'),
			description: 'The answer (or one of the answers) provided by the respondent to the question.'
		}
	})
});
