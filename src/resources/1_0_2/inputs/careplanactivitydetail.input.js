const {
	GraphQLList,
	GraphQLString,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary CarePlanactivitydetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CarePlanactivitydetail_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity-category
		category: {
			type: require('./codeableconcept.input.js'),
			description:
				'High-level categorization of the type of activity in a care plan.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity
		code: {
			type: require('./codeableconcept.input.js'),
			description:
				'Detailed description of the type of planned activity; e.g. What lab test, what procedure, what kind of encounter.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/activity-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Provides the rationale that drove the inclusion of this particular activity as part of the plan.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description:
				'Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.',
		},
		goal: {
			type: new GraphQLList(GraphQLString),
			description:
				'Internal reference that identifies the goals that this activity is intended to contribute towards meeting.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'Identifies what progress is being made for the specific activity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity-status
		status: {
			type: CodeScalar,
			description:
				'Identifies what progress is being made for the specific activity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/goal-status-reason
		statusReason: {
			type: require('./codeableconcept.input.js'),
			description:
				"Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.",
		},
		_prohibited: {
			type: require('./element.input.js'),
			description:
				'If true, indicates that the described activity is one that must NOT be engaged in when following the plan.',
		},
		prohibited: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'If true, indicates that the described activity is one that must NOT be engaged in when following the plan.',
		},
		scheduledTiming: {
			type: require('./timing.input.js'),
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		scheduledPeriod: {
			type: require('./period.input.js'),
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		_scheduledString: {
			type: require('./element.input.js'),
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		scheduledString: {
			type: GraphQLString,
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		location: {
			type: GraphQLString,
			description:
				'Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.',
		},
		performer: {
			type: new GraphQLList(GraphQLString),
			description: "Identifies who's expected to be involved in the activity.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'Identifies the food, drug or other product to be consumed or supplied in the activity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productReference: {
			type: GraphQLString,
			description:
				'Identifies the food, drug or other product to be consumed or supplied in the activity.',
		},
		dailyAmount: {
			type: require('./quantity.input.js'),
			description:
				'Identifies the quantity expected to be consumed in a given day.',
		},
		quantity: {
			type: require('./quantity.input.js'),
			description:
				'Identifies the quantity expected to be supplied, administered or consumed by the subject.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.',
		},
		description: {
			type: GraphQLString,
			description:
				'This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.',
		},
	}),
});
