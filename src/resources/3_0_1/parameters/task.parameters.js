const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the task query
 */
module.exports = {
	owner: {
		type: GraphQLString,
		description: 'Search by task owner (See http://hl7.org/fhir/SearchParameter/Task-owner).'
	},
	requester: {
		type: GraphQLString,
		description: 'Search by task requester (See http://hl7.org/fhir/SearchParameter/Task-requester).'
	},
	identifier: {
		type: TokenScalar,
		description: 'Search for a task instance by its business identifier (See http://hl7.org/fhir/SearchParameter/Task-identifier).'
	},
	business_status: {
		type: TokenScalar,
		description: 'Search by business status (See http://hl7.org/fhir/SearchParameter/Task-business-status).'
	},
	period: {
		type: DateScalar,
		description: 'Search by period Task is/was underway (See http://hl7.org/fhir/SearchParameter/Task-period).'
	},
	code: {
		type: TokenScalar,
		description: 'Search by task code (See http://hl7.org/fhir/SearchParameter/Task-code).'
	},
	performer: {
		type: TokenScalar,
		description: 'Search by recommended type of performer (e.g., Requester, Performer, Scheduler). (See http://hl7.org/fhir/SearchParameter/Task-performer).'
	},
	subject: {
		type: GraphQLString,
		description: 'Search by subject (See http://hl7.org/fhir/SearchParameter/Task-subject).'
	},
	focus: {
		type: GraphQLString,
		description: 'Search by task focus (See http://hl7.org/fhir/SearchParameter/Task-focus).'
	},
	part_of: {
		type: GraphQLString,
		description: 'Search by task this task is part of (See http://hl7.org/fhir/SearchParameter/Task-part-of).'
	},
	priority: {
		type: TokenScalar,
		description: 'Search by task priority (See http://hl7.org/fhir/SearchParameter/Task-priority).'
	},
	authored_on: {
		type: DateScalar,
		description: 'Search by creation date (See http://hl7.org/fhir/SearchParameter/Task-authored-on).'
	},
	intent: {
		type: TokenScalar,
		description: 'Search by task intent (See http://hl7.org/fhir/SearchParameter/Task-intent).'
	},
	group_identifier: {
		type: TokenScalar,
		description: 'Search by group identifier (See http://hl7.org/fhir/SearchParameter/Task-group-identifier).'
	},
	based_on: {
		type: GraphQLString,
		description: 'Search by requests this task is based on (See http://hl7.org/fhir/SearchParameter/Task-based-on).'
	},
	patient: {
		type: GraphQLString,
		description: 'Search by patient (See http://hl7.org/fhir/SearchParameter/Task-patient).'
	},
	organization: {
		type: GraphQLString,
		description: 'Search by responsible organization (See http://hl7.org/fhir/SearchParameter/Task-organization).'
	},
	context: {
		type: GraphQLString,
		description: 'Search by encounter or episode (See http://hl7.org/fhir/SearchParameter/Task-context).'
	},
	modified: {
		type: DateScalar,
		description: 'Search by last modification date (See http://hl7.org/fhir/SearchParameter/Task-modified).'
	},
	status: {
		type: TokenScalar,
		description: 'Search by task status (See http://hl7.org/fhir/SearchParameter/Task-status).'
	}
};
