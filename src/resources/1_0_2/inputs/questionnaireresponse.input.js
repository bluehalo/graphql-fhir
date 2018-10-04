const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let QuestionnaireResponseResourceInputType = new GraphQLEnumType({
	name: 'QuestionnaireResponseResourceInputType',
	values: {
		QuestionnaireResponse: { value: 'QuestionnaireResponse' }
	}
});

/**
 * @name exports
 * @summary QuestionnaireResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'QuestionnaireResponse_Input',
	description: 'Base StructureDefinition for QuestionnaireResponse Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(QuestionnaireResponseResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'A business identifier assigned to a particular completed (or partially completed) questionnaire.'
		},
		questionnaire: {
			type: require('./reference.input'),
			description: 'Indicates the Questionnaire resource that defines the form for which answers are being provided.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The lifecycle status of the questionnaire response as a whole.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The lifecycle status of the questionnaire response as a whole.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.'
		},
		author: {
			type: require('./reference.input'),
			description: 'Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.'
		},
		authored: {
			type: DateTimeScalar,
			description: 'The date and/or time that this version of the questionnaire response was authored.'
		},
		_authored: {
			type: require('./element.input'),
			description: 'The date and/or time that this version of the questionnaire response was authored.'
		},
		source: {
			type: require('./reference.input'),
			description: 'The person who answered the questions about the subject.'
		},
		encounter: {
			type: require('./reference.input'),
			description: 'Encounter during which this set of questionnaire response were collected. When there were multiple encounters, this is the one considered most relevant to the context of the answers.'
		},
		group: {
			type: require('./questionnaireresponsegroup.input'),
			description: 'A group of questions to a possibly similarly grouped set of questions in the questionnaire response.'
		}
	})
});
