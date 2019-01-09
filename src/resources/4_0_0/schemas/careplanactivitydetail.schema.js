const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

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
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_kind: {
			type: require('./element.schema.js'),
			description:
				'A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.',
		},
		kind: {
			type: CodeScalar,
			description:
				'A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.',
		},
		_instantiatesCanonical: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.',
		},
		instantiatesCanonical: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.',
		},
		_instantiatesUri: {
			type: require('./element.schema.js'),
			description:
				'The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.',
		},
		instantiatesUri: {
			type: new GraphQLList(UriScalar),
			description:
				'The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter.',
		},
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
						'Indicates another resource, such as the health condition(s), whose existence justifies this request and drove the inclusion of this particular activity as part of the plan.',
					types: () => [
						require('./condition.schema.js'),
						require('./observation.schema.js'),
						require('./diagnosticreport.schema.js'),
						require('./documentreference.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'DiagnosticReport') {
							return require('./diagnosticreport.schema.js');
						}
						if (data && data.resourceType === 'DocumentReference') {
							return require('./documentreference.schema.js');
						}
					},
				}),
			),
			description:
				'Indicates another resource, such as the health condition(s), whose existence justifies this request and drove the inclusion of this particular activity as part of the plan.',
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
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Identifies what progress is being made for the specific activity.',
		},
		statusReason: {
			type: require('./codeableconcept.schema.js'),
			description:
				"Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.",
		},
		_doNotPerform: {
			type: require('./element.schema.js'),
			description:
				'If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, or missing, indicates that the described activity is one that should be engaged in when following the plan.',
		},
		doNotPerform: {
			type: GraphQLBoolean,
			description:
				'If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, or missing, indicates that the described activity is one that should be engaged in when following the plan.',
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
						require('./practitionerrole.schema.js'),
						require('./organization.schema.js'),
						require('./relatedperson.schema.js'),
						require('./patient.schema.js'),
						require('./careteam.schema.js'),
						require('./healthcareservice.schema.js'),
						require('./device.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'PractitionerRole') {
							return require('./practitionerrole.schema.js');
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
						if (data && data.resourceType === 'HealthcareService') {
							return require('./healthcareservice.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
					},
				}),
			),
			description: "Identifies who's expected to be involved in the activity.",
		},
		productCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Identifies the food, drug or other product to be consumed or supplied in the activity.',
		},
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
