const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary QuestionnaireResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'QuestionnaireResponse',
	description: 'Base StructureDefinition for QuestionnaireResponse Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'QuestionnaireResponse_Enum_schema',
					values: { QuestionnaireResponse: { value: 'QuestionnaireResponse' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'A business identifier assigned to a particular completed (or partially completed) questionnaire.',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'QuestionnaireResponsebasedOn_basedOn_Union',
					description:
						'The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ProcedureRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.',
					types: () => [
						require('./referralrequest.schema.js'),
						require('./careplan.schema.js'),
						require('./procedurerequest.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'ReferralRequest') {
							return require('./referralrequest.schema.js');
						}
						if (data && data.resourceType === 'CarePlan') {
							return require('./careplan.schema.js');
						}
						if (data && data.resourceType === 'ProcedureRequest') {
							return require('./procedurerequest.schema.js');
						}
					},
				}),
			),
			description:
				'The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ProcedureRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.',
		},
		parent: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'QuestionnaireResponseparent_parent_Union',
					description:
						'A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.',
					types: () => [
						require('./observation.schema.js'),
						require('./procedure.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'Procedure') {
							return require('./procedure.schema.js');
						}
					},
				}),
			),
			description:
				'A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.',
		},
		questionnaire: {
			type: new GraphQLUnionType({
				name: 'QuestionnaireResponsequestionnaire_questionnaire_Union',
				description:
					'The Questionnaire that defines and organizes the questions for which answers are being provided.',
				types: () => [require('./questionnaire.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Questionnaire') {
						return require('./questionnaire.schema.js');
					}
				},
			}),
			description:
				'The Questionnaire that defines and organizes the questions for which answers are being provided.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The position of the questionnaire response within its overall lifecycle.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The position of the questionnaire response within its overall lifecycle.',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'QuestionnaireResponsesubject_subject_Union',
				description:
					'The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.',
		},
		context: {
			type: new GraphQLUnionType({
				name: 'QuestionnaireResponsecontext_context_Union',
				description:
					'The encounter or episode of care with primary association to the questionnaire response.',
				types: () => [
					require('./encounter.schema.js'),
					require('./episodeofcare.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
					if (data && data.resourceType === 'EpisodeOfCare') {
						return require('./episodeofcare.schema.js');
					}
				},
			}),
			description:
				'The encounter or episode of care with primary association to the questionnaire response.',
		},
		_authored: {
			type: require('./element.schema.js'),
			description:
				'The date and/or time that this set of answers were last changed.',
		},
		authored: {
			type: DateTimeScalar,
			description:
				'The date and/or time that this set of answers were last changed.',
		},
		author: {
			type: new GraphQLUnionType({
				name: 'QuestionnaireResponseauthor_author_Union',
				description:
					'Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.',
				types: () => [
					require('./device.schema.js'),
					require('./practitioner.schema.js'),
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description:
				'Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.',
		},
		source: {
			type: new GraphQLUnionType({
				name: 'QuestionnaireResponsesource_source_Union',
				description: 'The person who answered the questions about the subject.',
				types: () => [
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description: 'The person who answered the questions about the subject.',
		},
		item: {
			type: new GraphQLList(require('./questionnaireresponseitem.schema.js')),
			description:
				'A group or question item from the original questionnaire for which answers are provided.',
		},
	}),
});
