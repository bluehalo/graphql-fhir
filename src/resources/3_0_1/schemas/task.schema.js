const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let TaskResourceType = new GraphQLEnumType({
	name: 'TaskResourceType',
	values: {
		Task: { value: 'Task' }
	}
});

/**
 * @name exports
 * @summary Task Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Task',
	description: 'Base StructureDefinition for Task Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(TaskResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The business identifier for this task.'
		},
		definitionUri: {
			type: UriScalar,
			description: 'A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.'
		},
		_definitionUri: {
			type: require('./element.schema'),
			description: 'A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.'
		},
		definitionReference: {
			type: require('./reference.schema'),
			description: 'A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a \'request\' resource such as a ProcedureRequest, MedicationRequest, ProcedureRequest, CarePlan, etc. which is distinct from the \'request\' resource the task is seeking to fulfil.  This latter resource is referenced by FocusOn.  For example, based on a ProcedureRequest (= BasedOn), a task is created to fulfil a procedureRequest ( = FocusOn ) to collect a specimen from a patient.'
		},
		groupIdentifier: {
			type: require('./identifier.schema'),
			description: 'An identifier that links together multiple tasks and other requests that were created in the same context.'
		},
		partOf: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Task that this particular task is part of.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/task-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current status of the task.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The current status of the task.'
		},
		statusReason: {
			type: require('./codeableconcept.schema'),
			description: 'An explanation as to why this task is held, failed, was refused, etc.'
		},
		businessStatus: {
			type: require('./codeableconcept.schema'),
			description: 'Contains business-specific nuances of the business state.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/request-intent
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the \'level\' of actionability associated with the Task.  I.e. Is this a proposed task, a planned task, an actionable task, etc.'
		},
		_intent: {
			type: require('./element.schema'),
			description: 'Indicates the \'level\' of actionability associated with the Task.  I.e. Is this a proposed task, a planned task, an actionable task, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/request-priority
		priority: {
			type: CodeScalar,
			description: 'Indicates how quickly the Task should be addressed with respect to other requests.'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'Indicates how quickly the Task should be addressed with respect to other requests.'
		},
		code: {
			type: require('./codeableconcept.schema'),
			description: 'A name or code (or both) briefly describing what the task involves.'
		},
		description: {
			type: GraphQLString,
			description: 'A free-text description of what is to be performed.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free-text description of what is to be performed.'
		},
		focus: {
			type: require('./reference.schema'),
			description: 'The request being actioned or the resource being manipulated by this task.'
		},
		for: {
			type: require('./reference.schema'),
			description: 'The entity who benefits from the performance of the service specified in the task (e.g., the patient).'
		},
		context: {
			type: require('./reference.schema'),
			description: 'The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.'
		},
		executionPeriod: {
			type: require('./period.schema'),
			description: 'Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).'
		},
		authoredOn: {
			type: DateTimeScalar,
			description: 'The date and time this task was created.'
		},
		_authoredOn: {
			type: require('./element.schema'),
			description: 'The date and time this task was created.'
		},
		lastModified: {
			type: DateTimeScalar,
			description: 'The date and time of last modification to this task.'
		},
		_lastModified: {
			type: require('./element.schema'),
			description: 'The date and time of last modification to this task.'
		},
		requester: {
			type: require('./taskrequester.schema'),
			description: 'The creator of the task.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/task-performer-type
		performerType: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The type of participant that can execute the task.'
		},
		owner: {
			type: require('./reference.schema'),
			description: 'Individual organization or Device currently responsible for task execution.'
		},
		reason: {
			type: require('./codeableconcept.schema'),
			description: 'A description or code indicating why this task needs to be performed.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Free-text information captured about the task as it progresses.'
		},
		relevantHistory: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task.'
		},
		restriction: {
			type: require('./taskrestriction.schema'),
			description: 'If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.'
		},
		input: {
			type: new GraphQLList(require('./taskinput.schema')),
			description: 'Additional information that may be needed in the execution of the task.'
		},
		output: {
			type: new GraphQLList(require('./taskoutput.schema')),
			description: 'Outputs produced by the Task.'
		}
	})
});
