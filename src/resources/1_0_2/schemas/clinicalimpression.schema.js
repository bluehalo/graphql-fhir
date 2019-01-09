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
 * @summary ClinicalImpression Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClinicalImpression',
	description: 'Base StructureDefinition for ClinicalImpression Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ClinicalImpression_Enum_schema',
					values: { ClinicalImpression: { value: 'ClinicalImpression' } },
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
		patient: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ClinicalImpressionpatient_patient_Union',
					description: 'The patient being assessed.',
					types: () => [require('./patient.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
					},
				}),
			),
			description: 'The patient being assessed.',
		},
		assessor: {
			type: new GraphQLUnionType({
				name: 'ClinicalImpressionassessor_assessor_Union',
				description: 'The clinician performing the assessment.',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
				},
			}),
			description: 'The clinician performing the assessment.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'Identifies the workflow status of the assessment.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinical-impression-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies the workflow status of the assessment.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The point in time at which the assessment was concluded (not when it was recorded).',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The point in time at which the assessment was concluded (not when it was recorded).',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.',
		},
		description: {
			type: GraphQLString,
			description:
				'A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.',
		},
		previous: {
			type: new GraphQLUnionType({
				name: 'ClinicalImpressionprevious_previous_Union',
				description:
					"A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.",
				types: () => [require('./clinicalimpression.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'ClinicalImpression') {
						return require('./clinicalimpression.schema.js');
					}
				},
			}),
			description:
				"A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.",
		},
		problem: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ClinicalImpressionproblem_problem_Union',
					description:
						'This a list of the general problems/conditions for a patient.',
					types: () => [
						require('./condition.schema.js'),
						require('./allergyintolerance.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'AllergyIntolerance') {
							return require('./allergyintolerance.schema.js');
						}
					},
				}),
			),
			description:
				'This a list of the general problems/conditions for a patient.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		triggerCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		triggerReference: {
			type: new GraphQLUnionType({
				name: 'ClinicalImpressiontriggerReference_triggerReference_Union',
				description:
					'The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.',
		},
		investigations: {
			type: new GraphQLList(
				require('./clinicalimpressioninvestigations.schema.js'),
			),
			description:
				'One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.',
		},
		_protocol: {
			type: require('./element.schema.js'),
			description:
				'Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.',
		},
		protocol: {
			type: UriScalar,
			description:
				'Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.',
		},
		_summary: {
			type: require('./element.schema.js'),
			description: 'A text summary of the investigations and the diagnosis.',
		},
		summary: {
			type: GraphQLString,
			description: 'A text summary of the investigations and the diagnosis.',
		},
		finding: {
			type: new GraphQLList(require('./clinicalimpressionfinding.schema.js')),
			description:
				'Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		resolved: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Diagnoses/conditions resolved since the last assessment.',
		},
		ruledOut: {
			type: new GraphQLList(require('./clinicalimpressionruledout.schema.js')),
			description: 'Diagnosis considered not possible.',
		},
		_prognosis: {
			type: require('./element.schema.js'),
			description: 'Estimate of likely outcome.',
		},
		prognosis: {
			type: GraphQLString,
			description: 'Estimate of likely outcome.',
		},
		plan: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ClinicalImpressionplan_plan_Union',
					description: 'Plan of action after assessment.',
					types: () => [
						require('./careplan.schema.js'),
						require('./appointment.schema.js'),
						require('./communicationrequest.schema.js'),
						require('./deviceuserequest.schema.js'),
						require('./diagnosticorder.schema.js'),
						require('./medicationorder.schema.js'),
						require('./nutritionorder.schema.js'),
						require('./order.schema.js'),
						require('./procedurerequest.schema.js'),
						require('./processrequest.schema.js'),
						require('./referralrequest.schema.js'),
						require('./supplyrequest.schema.js'),
						require('./visionprescription.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'CarePlan') {
							return require('./careplan.schema.js');
						}
						if (data && data.resourceType === 'Appointment') {
							return require('./appointment.schema.js');
						}
						if (data && data.resourceType === 'CommunicationRequest') {
							return require('./communicationrequest.schema.js');
						}
						if (data && data.resourceType === 'DeviceUseRequest') {
							return require('./deviceuserequest.schema.js');
						}
						if (data && data.resourceType === 'DiagnosticOrder') {
							return require('./diagnosticorder.schema.js');
						}
						if (data && data.resourceType === 'MedicationOrder') {
							return require('./medicationorder.schema.js');
						}
						if (data && data.resourceType === 'NutritionOrder') {
							return require('./nutritionorder.schema.js');
						}
						if (data && data.resourceType === 'Order') {
							return require('./order.schema.js');
						}
						if (data && data.resourceType === 'ProcedureRequest') {
							return require('./procedurerequest.schema.js');
						}
						if (data && data.resourceType === 'ProcessRequest') {
							return require('./processrequest.schema.js');
						}
						if (data && data.resourceType === 'ReferralRequest') {
							return require('./referralrequest.schema.js');
						}
						if (data && data.resourceType === 'SupplyRequest') {
							return require('./supplyrequest.schema.js');
						}
						if (data && data.resourceType === 'VisionPrescription') {
							return require('./visionprescription.schema.js');
						}
					},
				}),
			),
			description: 'Plan of action after assessment.',
		},
		action: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ClinicalImpressionaction_action_Union',
					description: 'Actions taken during assessment.',
					types: () => [
						require('./referralrequest.schema.js'),
						require('./procedurerequest.schema.js'),
						require('./procedure.schema.js'),
						require('./medicationorder.schema.js'),
						require('./diagnosticorder.schema.js'),
						require('./nutritionorder.schema.js'),
						require('./supplyrequest.schema.js'),
						require('./appointment.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'ReferralRequest') {
							return require('./referralrequest.schema.js');
						}
						if (data && data.resourceType === 'ProcedureRequest') {
							return require('./procedurerequest.schema.js');
						}
						if (data && data.resourceType === 'Procedure') {
							return require('./procedure.schema.js');
						}
						if (data && data.resourceType === 'MedicationOrder') {
							return require('./medicationorder.schema.js');
						}
						if (data && data.resourceType === 'DiagnosticOrder') {
							return require('./diagnosticorder.schema.js');
						}
						if (data && data.resourceType === 'NutritionOrder') {
							return require('./nutritionorder.schema.js');
						}
						if (data && data.resourceType === 'SupplyRequest') {
							return require('./supplyrequest.schema.js');
						}
						if (data && data.resourceType === 'Appointment') {
							return require('./appointment.schema.js');
						}
					},
				}),
			),
			description: 'Actions taken during assessment.',
		},
	}),
});
