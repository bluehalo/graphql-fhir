const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let QuestionnaireResponseResourceType = new GraphQLEnumType({
	name: 'QuestionnaireResponseResourceType',
	values: {
		QuestionnaireResponse: { value: 'QuestionnaireResponse' }
	}
});

/**
 * @name exports
 * @summary QuestionnaireResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'QuestionnaireResponse',
	description: 'Base StructureDefinition for QuestionnaireResponse Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(QuestionnaireResponseResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'A business identifier assigned to a particular completed (or partially completed) questionnaire.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ProcedureRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.'
		},
		parent: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.'
		},
		questionnaire: {
			type: require('./reference.schema'),
			description: 'The Questionnaire that defines and organizes the questions for which answers are being provided.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The position of the questionnaire response within its overall lifecycle.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The position of the questionnaire response within its overall lifecycle.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'The encounter or episode of care with primary association to the questionnaire response.'
		},
		authored: {
			type: DateTimeScalar,
			description: 'The date and/or time that this set of answers were last changed.'
		},
		_authored: {
			type: require('./element.schema'),
			description: 'The date and/or time that this set of answers were last changed.'
		},
		author: {
			type: require('./reference.schema'),
			description: 'Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.'
		},
		source: {
			type: require('./reference.schema'),
			description: 'The person who answered the questions about the subject.'
		},
		item: {
			type: new GraphQLList(require('./questionnaireresponseitem.schema')),
			description: 'A group or question item from the original questionnaire for which answers are provided.'
		}
	})
});
