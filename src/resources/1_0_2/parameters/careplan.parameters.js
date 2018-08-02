const TokenScalar = require('../scalars/token.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLString } = require('graphql');

/**
 * @name exports
 * @static
 * @summary Arguments for the careplan query
 */
module.exports = {
	activitycode: {
		type: TokenScalar,
		description: 'Detail type of activity. See http://hl7.org/fhir/SearchParameter/careplan-activitycode.'
	},
	condition: {
		type: GraphQLString,
		description: 'Health issues this plan addresses. See http://hl7.org/fhir/SearchParameter/careplan-condition.'
	},
	subject: {
		type: GraphQLString,
		description: 'Who care plan is for. See http://hl7.org/fhir/SearchParameter/careplan-subject.'
	},
	activitydate: {
		type: DateScalar,
		description: 'Specified date occurs within period specified by CarePlan.activity.timingSchedule. See http://hl7.org/fhir/SearchParameter/careplan-activitydate.'
	},
	date: {
		type: DateScalar,
		description: 'Time period plan covers. See http://hl7.org/fhir/SearchParameter/careplan-date.'
	},
	goal: {
		type: GraphQLString,
		description: 'Desired outcome of plan. See http://hl7.org/fhir/SearchParameter/careplan-goal.'
	},
	related: {
		type: GraphQLString,
		description: 'A combination of the type of relationship and the related plan. See http://hl7.org/fhir/SearchParameter/careplan-related.'
	},
	relatedcode: {
		type: TokenScalar,
		description: 'includes | replaces | fulfills. See http://hl7.org/fhir/SearchParameter/careplan-relatedcode.'
	},
	patient: {
		type: GraphQLString,
		description: 'Who care plan is for. See http://hl7.org/fhir/SearchParameter/careplan-patient.'
	},
	participant: {
		type: GraphQLString,
		description: 'Who is involved. See http://hl7.org/fhir/SearchParameter/careplan-participant.'
	},
	performer: {
		type: GraphQLString,
		description: 'Matches if the practitioner is listed as a performer in any of the \'simple\' activities.  (For performers of the detailed activities, chain through the activitydetail search parameter.). See http://hl7.org/fhir/SearchParameter/careplan-performer.'
	},
	activityreference: {
		type: GraphQLString,
		description: 'Activity details defined in specific resource. See http://hl7.org/fhir/SearchParameter/careplan-activityreference.'
	},
	relatedplan: {
		type: GraphQLString,
		description: 'Plan relationship exists with. See http://hl7.org/fhir/SearchParameter/careplan-relatedplan.'
	}
};
