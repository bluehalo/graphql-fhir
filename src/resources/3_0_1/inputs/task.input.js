const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Task Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Task_Input',
	description: 'Base StructureDefinition for Task Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Task_Enum_input',
					values: { Task: { value: 'Task' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description: 'The business identifier for this task.',
		},
		_definitionUri: {
			type: require('./element.input.js'),
			description:
				'A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.',
		},
		definitionUri: {
			type: UriScalar,
			description:
				'A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.',
		},
		definitionReference: {
			type: GraphQLString,
			description:
				'A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.',
		},
		basedOn: {
			type: new GraphQLList(GraphQLString),
			description:
				"BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a 'request' resource such as a ProcedureRequest, MedicationRequest, ProcedureRequest, CarePlan, etc. which is distinct from the 'request' resource the task is seeking to fulfil.  This latter resource is referenced by FocusOn.  For example, based on a ProcedureRequest (= BasedOn), a task is created to fulfil a procedureRequest ( = FocusOn ) to collect a specimen from a patient.",
		},
		groupIdentifier: {
			type: require('./identifier.input.js'),
			description:
				'An identifier that links together multiple tasks and other requests that were created in the same context.',
		},
		partOf: {
			type: new GraphQLList(GraphQLString),
			description: 'Task that this particular task is part of.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The current status of the task.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/task-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current status of the task.',
		},
		statusReason: {
			type: require('./codeableconcept.input.js'),
			description:
				'An explanation as to why this task is held, failed, was refused, etc.',
		},
		businessStatus: {
			type: require('./codeableconcept.input.js'),
			description: 'Contains business-specific nuances of the business state.',
		},
		_intent: {
			type: require('./element.input.js'),
			description:
				"Indicates the 'level' of actionability associated with the Task.  I.e. Is this a proposed task, a planned task, an actionable task, etc.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-intent
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				"Indicates the 'level' of actionability associated with the Task.  I.e. Is this a proposed task, a planned task, an actionable task, etc.",
		},
		_priority: {
			type: require('./element.input.js'),
			description:
				'Indicates how quickly the Task should be addressed with respect to other requests.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly the Task should be addressed with respect to other requests.',
		},
		code: {
			type: require('./codeableconcept.input.js'),
			description:
				'A name or code (or both) briefly describing what the task involves.',
		},
		_description: {
			type: require('./element.input.js'),
			description: 'A free-text description of what is to be performed.',
		},
		description: {
			type: GraphQLString,
			description: 'A free-text description of what is to be performed.',
		},
		focus: {
			type: GraphQLString,
			description:
				'The request being actioned or the resource being manipulated by this task.',
		},
		for: {
			type: GraphQLString,
			description:
				'The entity who benefits from the performance of the service specified in the task (e.g., the patient).',
		},
		context: {
			type: GraphQLString,
			description:
				'The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.',
		},
		executionPeriod: {
			type: require('./period.input.js'),
			description:
				'Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).',
		},
		_authoredOn: {
			type: require('./element.input.js'),
			description: 'The date and time this task was created.',
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'The date and time this task was created.',
		},
		_lastModified: {
			type: require('./element.input.js'),
			description: 'The date and time of last modification to this task.',
		},
		lastModified: {
			type: DateTimeScalar,
			description: 'The date and time of last modification to this task.',
		},
		requester: {
			type: require('./taskrequester.input.js'),
			description: 'The creator of the task.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/task-performer-type
		performerType: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'The type of participant that can execute the task.',
		},
		owner: {
			type: GraphQLString,
			description:
				'Individual organization or Device currently responsible for task execution.',
		},
		reason: {
			type: require('./codeableconcept.input.js'),
			description:
				'A description or code indicating why this task needs to be performed.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'Free-text information captured about the task as it progresses.',
		},
		relevantHistory: {
			type: new GraphQLList(GraphQLString),
			description:
				'Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task.',
		},
		restriction: {
			type: require('./taskrestriction.input.js'),
			description:
				'If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.',
		},
		input: {
			type: new GraphQLList(require('./taskinput.input.js')),
			description:
				'Additional information that may be needed in the execution of the task.',
		},
		output: {
			type: new GraphQLList(require('./taskoutput.input.js')),
			description: 'Outputs produced by the Task.',
		},
	}),
});
