const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the careplan query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/CarePlan-activitycode
	activitycode: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CarePlan.activity.detail.code',
		description: 'Detail type of activity',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-activitydate
	activitydate: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CarePlan.activity.detail.scheduledTiming',
		description:
			'Specified date occurs within period specified by CarePlan.activity.timingSchedule',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-activityreference
	activityreference: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CarePlan.activity.reference',
		description: 'Activity details defined in specific resource',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-condition
	condition: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CarePlan.addresses',
		description: 'Health issues this plan addresses',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-date
	date: {
		type: DateScalar,
		fhirtype: 'date',
		xpath: 'CarePlan.period',
		description: 'Time period plan covers',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-goal
	goal: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CarePlan.goal',
		description: 'Desired outcome of plan',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-participant
	participant: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CarePlan.participant.member',
		description: 'Who is involved',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CarePlan.subject',
		description: 'Who care plan is for',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-performer
	performer: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CarePlan.activity.detail.performer',
		description:
			"Matches if the practitioner is listed as a performer in any of the 'simple' activities.  (For performers of the detailed activities, chain through the activitydetail search parameter.)",
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-related
	related: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'A combination of the type of relationship and the related plan',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-relatedcode
	relatedcode: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'CarePlan.relatedPlan.code',
		description: 'includes | replaces | fulfills',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-relatedplan
	relatedplan: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CarePlan.relatedPlan.plan',
		description: 'Plan relationship exists with',
	},
	// http://hl7.org/fhir/SearchParameter/CarePlan-subject
	subject: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'CarePlan.subject',
		description: 'Who care plan is for',
	},
};
