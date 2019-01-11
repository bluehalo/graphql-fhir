const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary CarePlanactivitydetail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CarePlanactivitydetail',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity-category
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'High-level categorization of the type of activity in a care plan.',
		},
		definition: {
			type: new GraphQLUnionType({
				name: 'CarePlanactivitydetaildefinition_definition_Union',
				description:
					'Identifies the protocol, questionnaire, guideline or other specification the planned activity should be conducted in accordance with.',
				types: () => [
					require('./plandefinition.schema.js'),
					require('./activitydefinition.schema.js'),
					require('./questionnaire.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'PlanDefinition') {
						return require('./plandefinition.schema.js');
					}
					if (data && data.resourceType === 'ActivityDefinition') {
						return require('./activitydefinition.schema.js');
					}
					if (data && data.resourceType === 'Questionnaire') {
						return require('./questionnaire.schema.js');
					}
				},
			}),
			description:
				'Identifies the protocol, questionnaire, guideline or other specification the planned activity should be conducted in accordance with.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Detailed description of the type of planned activity; e.g. What lab test, what procedure, what kind of encounter.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/activity-reason
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlanactivitydetailreasonReference_reasonReference_Union',
					description:
						'Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.',
					types: () => [require('./condition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
					},
				}),
			),
			description:
				'Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.',
		},
		goal: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlanactivitydetailgoal_goal_Union',
					description:
						'Internal reference that identifies the goals that this activity is intended to contribute towards meeting.',
					types: () => [require('./goal.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Goal') {
							return require('./goal.schema.js');
						}
					},
				}),
			),
			description:
				'Internal reference that identifies the goals that this activity is intended to contribute towards meeting.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'Identifies what progress is being made for the specific activity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/care-plan-activity-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Identifies what progress is being made for the specific activity.',
		},
		_statusReason: {
			type: require('./element.schema.js'),
			description:
				"Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.",
		},
		statusReason: {
			type: GraphQLString,
			description:
				"Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.",
		},
		_prohibited: {
			type: require('./element.schema.js'),
			description:
				'If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, indicates that the described activity is one that should be engaged in when following the plan.',
		},
		prohibited: {
			type: GraphQLBoolean,
			description:
				'If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, indicates that the described activity is one that should be engaged in when following the plan.',
		},
		scheduledTiming: {
			type: require('./timing.schema.js'),
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		scheduledPeriod: {
			type: require('./period.schema.js'),
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		_scheduledString: {
			type: require('./element.schema.js'),
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		scheduledString: {
			type: GraphQLString,
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		location: {
			type: new GraphQLUnionType({
				name: 'CarePlanactivitydetaillocation_location_Union',
				description:
					'Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description:
				'Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.',
		},
		performer: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlanactivitydetailperformer_performer_Union',
					description:
						"Identifies who's expected to be involved in the activity.",
					types: () => [
						require('./practitioner.schema.js'),
						require('./organization.schema.js'),
						require('./relatedperson.schema.js'),
						require('./patient.schema.js'),
						require('./careteam.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
						if (data && data.resourceType === 'RelatedPerson') {
							return require('./relatedperson.schema.js');
						}
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'CareTeam') {
							return require('./careteam.schema.js');
						}
					},
				}),
			),
			description: "Identifies who's expected to be involved in the activity.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Identifies the food, drug or other product to be consumed or supplied in the activity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productReference: {
			type: new GraphQLUnionType({
				name: 'CarePlanactivitydetailproductReference_productReference_Union',
				description:
					'Identifies the food, drug or other product to be consumed or supplied in the activity.',
				types: () => [
					require('./medication.schema.js'),
					require('./substance.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Medication') {
						return require('./medication.schema.js');
					}
					if (data && data.resourceType === 'Substance') {
						return require('./substance.schema.js');
					}
				},
			}),
			description:
				'Identifies the food, drug or other product to be consumed or supplied in the activity.',
		},
		dailyAmount: {
			type: require('./quantity.schema.js'),
			description:
				'Identifies the quantity expected to be consumed in a given day.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description:
				'Identifies the quantity expected to be supplied, administered or consumed by the subject.',
		},
		_description: {
			type: require('./element.schema.js'),
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
