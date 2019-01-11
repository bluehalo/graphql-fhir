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
		questionnaire: {
			type: new GraphQLUnionType({
				name: 'QuestionnaireResponsequestionnaire_questionnaire_Union',
				description:
					'Indicates the Questionnaire resource that defines the form for which answers are being provided.',
				types: () => [require('./questionnaire.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Questionnaire') {
						return require('./questionnaire.schema.js');
					}
				},
			}),
			description:
				'Indicates the Questionnaire resource that defines the form for which answers are being provided.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The lifecycle status of the questionnaire response as a whole.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The lifecycle status of the questionnaire response as a whole.',
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
		_authored: {
			type: require('./element.schema.js'),
			description:
				'The date and/or time that this version of the questionnaire response was authored.',
		},
		authored: {
			type: DateTimeScalar,
			description:
				'The date and/or time that this version of the questionnaire response was authored.',
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
		encounter: {
			type: new GraphQLUnionType({
				name: 'QuestionnaireResponseencounter_encounter_Union',
				description:
					'Encounter during which this set of questionnaire response were collected. When there were multiple encounters, this is the one considered most relevant to the context of the answers.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'Encounter during which this set of questionnaire response were collected. When there were multiple encounters, this is the one considered most relevant to the context of the answers.',
		},
		group: {
			type: require('./questionnaireresponsegroup.schema.js'),
			description:
				'A group of questions to a possibly similarly grouped set of questions in the questionnaire response.',
		},
	}),
});
