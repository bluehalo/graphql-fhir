const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary QuestionnaireResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'QuestionnaireResponse',
	description: 'Base StructureDefinition for QuestionnaireResponse Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'A business identifier assigned to a particular completed (or partially completed) questionnaire.'
		},
		questionnaire: {
			type: require('./reference.schema'),
			description: 'Indicates the Questionnaire resource that defines the form for which answers are being provided.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The lifecycle status of the questionnaire response as a whole.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The lifecycle status of the questionnaire response as a whole.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.'
		},
		author: {
			type: require('./reference.schema'),
			description: 'Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.'
		},
		authored: {
			type: DateTimeScalar,
			description: 'The date and/or time that this version of the questionnaire response was authored.'
		},
		_authored: {
			type: require('./element.schema'),
			description: 'The date and/or time that this version of the questionnaire response was authored.'
		},
		source: {
			type: require('./reference.schema'),
			description: 'The person who answered the questions about the subject.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'Encounter during which this set of questionnaire response were collected. When there were multiple encounters, this is the one considered most relevant to the context of the answers.'
		},
		group: {
			type: require('./questionnaireresponsegroup.schema'),
			description: 'A group of questions to a possibly similarly grouped set of questions in the questionnaire response.'
		}
	})
});
