const DateScalar = require('../scalars/date.scalar');
const TokenScalar = require('../scalars/token.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the careplan query
 */
module.exports = {
	date: {
		type: DateScalar,
		description: 'Time period plan covers (See http://hl7.org/fhir/SearchParameter/clinical-date).'
	},
	care_team: {
		type: GraphQLString,
		description: 'Who\'s involved in plan? (See http://hl7.org/fhir/SearchParameter/CarePlan-care-team).'
	},
	identifier: {
		type: TokenScalar,
		description: 'External Ids for this plan (See http://hl7.org/fhir/SearchParameter/clinical-identifier).'
	},
	performer: {
		type: GraphQLString,
		description: 'Matches if the practitioner is listed as a performer in any of the \'simple\' activities.  (For performers of the detailed activities, chain through the activitydetail search parameter.) (See http://hl7.org/fhir/SearchParameter/CarePlan-performer).'
	},
	goal: {
		type: GraphQLString,
		description: 'Desired outcome of plan (See http://hl7.org/fhir/SearchParameter/CarePlan-goal).'
	},
	subject: {
		type: GraphQLString,
		description: 'Who care plan is for (See http://hl7.org/fhir/SearchParameter/CarePlan-subject).'
	},
	replaces: {
		type: GraphQLString,
		description: 'CarePlan replaced by this CarePlan (See http://hl7.org/fhir/SearchParameter/CarePlan-replaces).'
	},
	part_of: {
		type: GraphQLString,
		description: 'Part of referenced CarePlan (See http://hl7.org/fhir/SearchParameter/CarePlan-part-of).'
	},
	encounter: {
		type: GraphQLString,
		description: 'Created in context of (See http://hl7.org/fhir/SearchParameter/CarePlan-encounter).'
	},
	intent: {
		type: TokenScalar,
		description: 'proposal | plan | order | option (See http://hl7.org/fhir/SearchParameter/CarePlan-intent).'
	},
	activity_reference: {
		type: GraphQLString,
		description: 'Activity details defined in specific resource (See http://hl7.org/fhir/SearchParameter/CarePlan-activity-reference).'
	},
	condition: {
		type: GraphQLString,
		description: 'Health issues this plan addresses (See http://hl7.org/fhir/SearchParameter/CarePlan-condition).'
	},
	based_on: {
		type: GraphQLString,
		description: 'Fulfills care plan (See http://hl7.org/fhir/SearchParameter/CarePlan-based-on).'
	},
	patient: {
		type: GraphQLString,
		description: 'Who care plan is for (See http://hl7.org/fhir/SearchParameter/clinical-patient).'
	},
	context: {
		type: GraphQLString,
		description: 'Created in context of (See http://hl7.org/fhir/SearchParameter/CarePlan-context).'
	},
	activity_date: {
		type: DateScalar,
		description: 'Specified date occurs within period specified by CarePlan.activity.timingSchedule (See http://hl7.org/fhir/SearchParameter/CarePlan-activity-date).'
	},
	definition: {
		type: GraphQLString,
		description: 'Protocol or definition (See http://hl7.org/fhir/SearchParameter/CarePlan-definition).'
	},
	category: {
		type: TokenScalar,
		description: 'Type of plan (See http://hl7.org/fhir/SearchParameter/CarePlan-category).'
	},
	activity_code: {
		type: TokenScalar,
		description: 'Detail type of activity (See http://hl7.org/fhir/SearchParameter/CarePlan-activity-code).'
	},
	status: {
		type: TokenScalar,
		description: 'draft | active | suspended | completed | entered-in-error | cancelled | unknown (See http://hl7.org/fhir/SearchParameter/CarePlan-status).'
	}
};
