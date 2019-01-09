const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary RiskAssessment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RiskAssessment',
	description:
		'An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'RiskAssessment_Enum_schema',
					values: { RiskAssessment: { value: 'RiskAssessment' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
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
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'Business identifier assigned to the risk assessment.',
		},
		basedOn: {
			type: new GraphQLUnionType({
				name: 'RiskAssessmentbasedOn_basedOn_Union',
				description:
					'A reference to the request that is fulfilled by this risk assessment.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'A reference to the request that is fulfilled by this risk assessment.',
		},
		parent: {
			type: new GraphQLUnionType({
				name: 'RiskAssessmentparent_parent_Union',
				description:
					'A reference to a resource that this risk assessment is part of, such as a Procedure.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'A reference to a resource that this risk assessment is part of, such as a Procedure.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of the RiskAssessment, using the same statuses as an Observation.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of the RiskAssessment, using the same statuses as an Observation.',
		},
		method: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The algorithm, process or mechanism used to evaluate the risk.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description: 'The type of the risk assessment performed.',
		},
		subject: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'RiskAssessmentsubject_subject_Union',
					description: 'The patient or group the risk assessment applies to.',
					types: () => [
						require('./patient.schema.js'),
						require('./group.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
					},
				}),
			),
			description: 'The patient or group the risk assessment applies to.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'RiskAssessmentencounter_encounter_Union',
				description: 'The encounter where the assessment was performed.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description: 'The encounter where the assessment was performed.',
		},
		_occurrenceDateTime: {
			type: require('./element.schema.js'),
			description:
				'The date (and possibly time) the risk assessment was performed.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description:
				'The date (and possibly time) the risk assessment was performed.',
		},
		occurrencePeriod: {
			type: require('./period.schema.js'),
			description:
				'The date (and possibly time) the risk assessment was performed.',
		},
		condition: {
			type: new GraphQLUnionType({
				name: 'RiskAssessmentcondition_condition_Union',
				description:
					'For assessments or prognosis specific to a particular condition, indicates the condition being assessed.',
				types: () => [require('./condition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Condition') {
						return require('./condition.schema.js');
					}
				},
			}),
			description:
				'For assessments or prognosis specific to a particular condition, indicates the condition being assessed.',
		},
		performer: {
			type: new GraphQLUnionType({
				name: 'RiskAssessmentperformer_performer_Union',
				description:
					'The provider or software application that performed the assessment.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./device.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description:
				'The provider or software application that performed the assessment.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'The reason the risk assessment was performed.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'RiskAssessmentreasonReference_reasonReference_Union',
					description:
						'Resources supporting the reason the risk assessment was performed.',
					types: () => [
						require('./condition.schema.js'),
						require('./observation.schema.js'),
						require('./diagnosticreport.schema.js'),
						require('./documentreference.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'DiagnosticReport') {
							return require('./diagnosticreport.schema.js');
						}
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
					},
				}),
			),
			description:
				'Resources supporting the reason the risk assessment was performed.',
		},
		basis: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'RiskAssessmentbasis_basis_Union',
					description:
						'Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).',
		},
		prediction: {
			type: new GraphQLList(require('./riskassessmentprediction.schema.js')),
			description: 'Describes the expected outcome for the subject.',
		},
		_mitigation: {
			type: require('./element.schema.js'),
			description:
				'A description of the steps that might be taken to reduce the identified risk(s).',
		},
		mitigation: {
			type: GraphQLString,
			description:
				'A description of the steps that might be taken to reduce the identified risk(s).',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description: 'Additional comments about the risk assessment.',
		},
	}),
});
