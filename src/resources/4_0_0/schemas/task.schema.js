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
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Task Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Task',
	description: 'A task to be performed.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Task_Enum_schema',
					values: { Task: { value: 'Task' } },
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
			description: 'The business identifier for this task.',
		},
		_instantiatesCanonical: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.',
		},
		instantiatesCanonical: {
			type: CanonicalScalar,
			description:
				'The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.',
		},
		_instantiatesUri: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.',
		},
		instantiatesUri: {
			type: UriScalar,
			description:
				'The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'TaskbasedOn_basedOn_Union',
					description:
						"BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a 'request' resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the 'request' resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.",
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				"BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a 'request' resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the 'request' resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.",
		},
		groupIdentifier: {
			type: require('./identifier.schema.js'),
			description:
				'An identifier that links together multiple tasks and other requests that were created in the same context.',
		},
		partOf: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'TaskpartOf_partOf_Union',
					description: 'Task that this particular task is part of.',
					types: () => [require('./task.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Task') {
							return require('./task.schema.js');
						}
					},
				}),
			),
			description: 'Task that this particular task is part of.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The current status of the task.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current status of the task.',
		},
		statusReason: {
			type: require('./codeableconcept.schema.js'),
			description:
				'An explanation as to why this task is held, failed, was refused, etc.',
		},
		businessStatus: {
			type: require('./codeableconcept.schema.js'),
			description: 'Contains business-specific nuances of the business state.',
		},
		_intent: {
			type: require('./element.schema.js'),
			description:
				"Indicates the 'level' of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc.",
		},
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"Indicates the 'level' of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc.",
		},
		_priority: {
			type: require('./element.schema.js'),
			description:
				'Indicates how quickly the Task should be addressed with respect to other requests.',
		},
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly the Task should be addressed with respect to other requests.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A name or code (or both) briefly describing what the task involves.',
		},
		_description: {
			type: require('./element.schema.js'),
			description: 'A free-text description of what is to be performed.',
		},
		description: {
			type: GraphQLString,
			description: 'A free-text description of what is to be performed.',
		},
		focus: {
			type: new GraphQLUnionType({
				name: 'Taskfocus_focus_Union',
				description:
					'The request being actioned or the resource being manipulated by this task.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'The request being actioned or the resource being manipulated by this task.',
		},
		for: {
			type: new GraphQLUnionType({
				name: 'Taskfor_for_Union',
				description:
					'The entity who benefits from the performance of the service specified in the task (e.g., the patient).',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'The entity who benefits from the performance of the service specified in the task (e.g., the patient).',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'Taskencounter_encounter_Union',
				description:
					'The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.',
		},
		executionPeriod: {
			type: require('./period.schema.js'),
			description:
				'Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).',
		},
		_authoredOn: {
			type: require('./element.schema.js'),
			description: 'The date and time this task was created.',
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'The date and time this task was created.',
		},
		_lastModified: {
			type: require('./element.schema.js'),
			description: 'The date and time of last modification to this task.',
		},
		lastModified: {
			type: DateTimeScalar,
			description: 'The date and time of last modification to this task.',
		},
		requester: {
			type: new GraphQLUnionType({
				name: 'Taskrequester_requester_Union',
				description: 'The creator of the task.',
				types: () => [
					require('./device.schema.js'),
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description: 'The creator of the task.',
		},
		performerType: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'The kind of participant that should perform the task.',
		},
		owner: {
			type: new GraphQLUnionType({
				name: 'Taskowner_owner_Union',
				description:
					'Individual organization or Device currently responsible for task execution.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
					require('./careteam.schema.js'),
					require('./healthcareservice.schema.js'),
					require('./patient.schema.js'),
					require('./device.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'CareTeam') {
						return require('./careteam.schema.js');
					}
					if (data && data.resourceType === 'HealthcareService') {
						return require('./healthcareservice.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description:
				'Individual organization or Device currently responsible for task execution.',
		},
		location: {
			type: new GraphQLUnionType({
				name: 'Tasklocation_location_Union',
				description:
					'Principal physical location where the this task is performed.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description:
				'Principal physical location where the this task is performed.',
		},
		reasonCode: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A description or code indicating why this task needs to be performed.',
		},
		reasonReference: {
			type: new GraphQLUnionType({
				name: 'TaskreasonReference_reasonReference_Union',
				description:
					'A resource reference indicating why this task needs to be performed.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'A resource reference indicating why this task needs to be performed.',
		},
		insurance: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Taskinsurance_insurance_Union',
					description:
						'Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.',
					types: () => [
						require('./coverage.schema.js'),
						require('./claimresponse.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Coverage') {
							return require('./coverage.schema.js');
						}
						if (data && data.resourceType === 'ClaimResponse') {
							return require('./claimresponse.schema.js');
						}
					},
				}),
			),
			description:
				'Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Free-text information captured about the task as it progresses.',
		},
		relevantHistory: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'TaskrelevantHistory_relevantHistory_Union',
					description:
						'Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task.',
					types: () => [require('./provenance.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Provenance') {
							return require('./provenance.schema.js');
						}
					},
				}),
			),
			description:
				'Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task.',
		},
		restriction: {
			type: require('./taskrestriction.schema.js'),
			description:
				'If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.',
		},
		input: {
			type: new GraphQLList(require('./taskinput.schema.js')),
			description:
				'Additional information that may be needed in the execution of the task.',
		},
		output: {
			type: new GraphQLList(require('./taskoutput.schema.js')),
			description: 'Outputs produced by the Task.',
		},
	}),
});
