const { GraphQLString } = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the task query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Task-authored-on
	authored_on: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Task.authoredOn',
		description: 'Search by creation date',
	},
	// http://hl7.org/fhir/SearchParameter/Task-based-on
	based_on: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Task.basedOn',
		description: 'Search by requests this task is based on',
	},
	// http://hl7.org/fhir/SearchParameter/Task-business-status
	business_status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Task.businessStatus',
		description: 'Search by business status',
	},
	// http://hl7.org/fhir/SearchParameter/Task-code
	code: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Task.code',
		description: 'Search by task code',
	},
	// http://hl7.org/fhir/SearchParameter/Task-context
	context: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Task.context',
		description: 'Search by encounter or episode',
	},
	// http://hl7.org/fhir/SearchParameter/Task-focus
	focus: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Task.focus',
		description: 'Search by task focus',
	},
	// http://hl7.org/fhir/SearchParameter/Task-group-identifier
	group_identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Task.groupIdentifier',
		description: 'Search by group identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Task-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Task.identifier',
		description: 'Search for a task instance by its business identifier',
	},
	// http://hl7.org/fhir/SearchParameter/Task-intent
	intent: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Task.intent',
		description: 'Search by task intent',
	},
	// http://hl7.org/fhir/SearchParameter/Task-modified
	modified: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Task.lastModified',
		description: 'Search by last modification date',
	},
	// http://hl7.org/fhir/SearchParameter/Task-organization
	organization: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Task.requester.onBehalfOf',
		description: 'Search by responsible organization',
	},
	// http://hl7.org/fhir/SearchParameter/Task-owner
	owner: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Task.owner',
		description: 'Search by task owner',
	},
	// http://hl7.org/fhir/SearchParameter/Task-part-of
	part_of: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Task.partOf',
		description: 'Search by task this task is part of',
	},
	// http://hl7.org/fhir/SearchParameter/Task-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Task.for',
		description: 'Search by patient',
	},
	// http://hl7.org/fhir/SearchParameter/Task-performer
	performer: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Task.performerType',
		description:
			'Search by recommended type of performer (e.g., Requester, Performer, Scheduler).',
	},
	// http://hl7.org/fhir/SearchParameter/Task-period
	period: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'Task.executionPeriod',
		description: 'Search by period Task is/was underway',
	},
	// http://hl7.org/fhir/SearchParameter/Task-priority
	priority: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Task.priority',
		description: 'Search by task priority',
	},
	// http://hl7.org/fhir/SearchParameter/Task-requester
	requester: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Task.requester.agent',
		description: 'Search by task requester',
	},
	// http://hl7.org/fhir/SearchParameter/Task-status
	status: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Task.status',
		description: 'Search by task status',
	},
	// http://hl7.org/fhir/SearchParameter/Task-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Task.for',
		description: 'Search by subject',
	},
};
