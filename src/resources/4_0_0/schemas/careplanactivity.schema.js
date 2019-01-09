const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary CarePlanactivity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CarePlanactivity',
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
		outcomeCodeableConcept: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not).',
		},
		outcomeReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlanactivityoutcomeReference_outcomeReference_Union',
					description:
						"Details of the outcome or action resulting from the activity.  The reference to an 'event' resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource).",
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				"Details of the outcome or action resulting from the activity.  The reference to an 'event' resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource).",
		},
		progress: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description: 'Notes about the adherence/status/progress of the activity.',
		},
		reference: {
			type: new GraphQLUnionType({
				name: 'CarePlanactivityreference_reference_Union',
				description:
					'The details of the proposed activity represented in a specific resource.',
				types: () => [
					require('./appointment.schema.js'),
					require('./communicationrequest.schema.js'),
					require('./devicerequest.schema.js'),
					require('./medicationrequest.schema.js'),
					require('./nutritionorder.schema.js'),
					require('./task.schema.js'),
					require('./servicerequest.schema.js'),
					require('./visionprescription.schema.js'),
					require('./requestgroup.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Appointment') {
						return require('./appointment.schema.js');
					}
					if (data && data.resourceType === 'CommunicationRequest') {
						return require('./communicationrequest.schema.js');
					}
					if (data && data.resourceType === 'DeviceRequest') {
						return require('./devicerequest.schema.js');
					}
					if (data && data.resourceType === 'MedicationRequest') {
						return require('./medicationrequest.schema.js');
					}
					if (data && data.resourceType === 'NutritionOrder') {
						return require('./nutritionorder.schema.js');
					}
					if (data && data.resourceType === 'Task') {
						return require('./task.schema.js');
					}
					if (data && data.resourceType === 'ServiceRequest') {
						return require('./servicerequest.schema.js');
					}
					if (data && data.resourceType === 'VisionPrescription') {
						return require('./visionprescription.schema.js');
					}
					if (data && data.resourceType === 'RequestGroup') {
						return require('./requestgroup.schema.js');
					}
				},
			}),
			description:
				'The details of the proposed activity represented in a specific resource.',
		},
		detail: {
			type: require('./careplanactivitydetail.schema.js'),
			description:
				"A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.",
		},
	}),
});
