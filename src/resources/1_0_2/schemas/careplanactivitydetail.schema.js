const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLBoolean, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CarePlanActivityDetail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CarePlanActivityDetail',
	description: 'A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn\'t know about specific resources such as procedure etc.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity-category
		category: {
			type: require('./codeableconcept.schema'),
			description: 'High-level categorization of the type of activity in a care plan.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity
		code: {
			type: require('./codeableconcept.schema'),
			description: 'Detailed description of the type of planned activity; e.g. What lab test, what procedure, what kind of encounter.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/activity-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Provides the rationale that drove the inclusion of this particular activity as part of the plan.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.'
		},
		goal: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Internal reference that identifies the goals that this activity is intended to contribute towards meeting.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity-status
		status: {
			type: CodeScalar,
			description: 'Identifies what progress is being made for the specific activity.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Identifies what progress is being made for the specific activity.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/goal-status-reason
		statusReason: {
			type: require('./codeableconcept.schema'),
			description: 'Provides reason why the activity isn\'t yet started, is on hold, was cancelled, etc.'
		},
		prohibited: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'If true, indicates that the described activity is one that must NOT be engaged in when following the plan.'
		},
		_prohibited: {
			type: require('./element.schema'),
			description: 'If true, indicates that the described activity is one that must NOT be engaged in when following the plan.'
		},
		scheduledTiming: {
			type: require('./timing.schema'),
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		scheduledPeriod: {
			type: require('./period.schema'),
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		scheduledString: {
			type: GraphQLString,
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		_scheduledString: {
			type: require('./element.schema'),
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		location: {
			type: require('./reference.schema'),
			description: 'Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.'
		},
		performer: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies who\'s expected to be involved in the activity.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Identifies the food, drug or other product to be consumed or supplied in the activity.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productReference: {
			type: require('./reference.schema'),
			description: 'Identifies the food, drug or other product to be consumed or supplied in the activity.'
		},
		dailyAmount: {
			type: require('./quantity.schema'),
			description: 'Identifies the quantity expected to be consumed in a given day.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'Identifies the quantity expected to be supplied, administered or consumed by the subject.'
		},
		description: {
			type: GraphQLString,
			description: 'This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.'
		}
	})
});
