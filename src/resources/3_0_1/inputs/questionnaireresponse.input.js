const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

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
		basedOn: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ProcedureRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.'
		},
		parent: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.'
		},
		questionnaire: {
			type: require('./reference.input'),
			description: 'The Questionnaire that defines and organizes the questions for which answers are being provided.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The position of the questionnaire response within its overall lifecycle.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The position of the questionnaire response within its overall lifecycle.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The encounter or episode of care with primary association to the questionnaire response.'
		},
		authored: {
			type: DateTimeScalar,
			description: 'The date and/or time that this set of answers were last changed.'
		},
		_authored: {
			type: require('./element.input'),
			description: 'The date and/or time that this set of answers were last changed.'
		},
		author: {
			type: require('./reference.input'),
			description: 'Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.'
		},
		source: {
			type: require('./reference.input'),
			description: 'The person who answered the questions about the subject.'
		},
		item: {
			type: new GraphQLList(require('./questionnaireresponseitem.input')),
			description: 'A group or question item from the original questionnaire for which answers are provided.'
		}
	})
});
