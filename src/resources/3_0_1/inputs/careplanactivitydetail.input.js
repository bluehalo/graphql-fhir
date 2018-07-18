const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CarePlanActivityDetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CarePlanActivityDetail_Input',
	description: 'A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn\'t know about specific resources such as procedure etc.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity-category
		category: {
			type: require('./codeableconcept.input'),
			description: 'High-level categorization of the type of activity in a care plan.'
		},
		definition: {
			type: require('./reference.input'),
			description: 'Identifies the protocol, questionnaire, guideline or other specification the planned activity should be conducted in accordance with.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity
		code: {
			type: require('./codeableconcept.input'),
			description: 'Detailed description of the type of planned activity; e.g. What lab test, what procedure, what kind of encounter.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/activity-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited.'
		},
		reasonReference: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.'
		},
		goal: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Internal reference that identifies the goals that this activity is intended to contribute towards meeting.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies what progress is being made for the specific activity.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Identifies what progress is being made for the specific activity.'
		},
		statusReason: {
			type: GraphQLString,
			description: 'Provides reason why the activity isn\'t yet started, is on hold, was cancelled, etc.'
		},
		_statusReason: {
			type: require('./element.input'),
			description: 'Provides reason why the activity isn\'t yet started, is on hold, was cancelled, etc.'
		},
		prohibited: {
			type: GraphQLBoolean,
			description: 'If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, indicates that the described activity is one that should be engaged in when following the plan.'
		},
		_prohibited: {
			type: require('./element.input'),
			description: 'If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, indicates that the described activity is one that should be engaged in when following the plan.'
		},
		scheduledTiming: {
			type: require('./timing.input'),
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		scheduledPeriod: {
			type: require('./period.input'),
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		scheduledString: {
			type: GraphQLString,
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		_scheduledString: {
			type: require('./element.input'),
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		location: {
			type: require('./reference.input'),
			description: 'Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.'
		},
		performer: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Identifies who\'s expected to be involved in the activity.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Identifies the food, drug or other product to be consumed or supplied in the activity.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productReference: {
			type: require('./reference.input'),
			description: 'Identifies the food, drug or other product to be consumed or supplied in the activity.'
		},
		dailyAmount: {
			type: require('./quantity.input'),
			description: 'Identifies the quantity expected to be consumed in a given day.'
		},
		quantity: {
			type: require('./quantity.input'),
			description: 'Identifies the quantity expected to be supplied, administered or consumed by the subject.'
		},
		description: {
			type: GraphQLString,
			description: 'This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.'
		},
		_description: {
			type: require('./element.input'),
			description: 'This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.'
		}
	})
});
