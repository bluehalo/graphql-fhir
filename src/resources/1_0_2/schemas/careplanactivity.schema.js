const { GraphQLList, GraphQLUnionType, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

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
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		actionResulting: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'CarePlanactivityactionResulting_actionResulting_Union',
					description:
						'Resources that describe follow-on actions resulting from the plan, such as drug prescriptions, encounter records, appointments, etc.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Resources that describe follow-on actions resulting from the plan, such as drug prescriptions, encounter records, appointments, etc.',
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
					require('./deviceuserequest.schema.js'),
					require('./diagnosticorder.schema.js'),
					require('./medicationorder.schema.js'),
					require('./nutritionorder.schema.js'),
					require('./order.schema.js'),
					require('./procedurerequest.schema.js'),
					require('./processrequest.schema.js'),
					require('./referralrequest.schema.js'),
					require('./supplyrequest.schema.js'),
					require('./visionprescription.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Appointment') {
						return require('./appointment.schema.js');
					}
					if (data && data.resourceType === 'CommunicationRequest') {
						return require('./communicationrequest.schema.js');
					}
					if (data && data.resourceType === 'DeviceUseRequest') {
						return require('./deviceuserequest.schema.js');
					}
					if (data && data.resourceType === 'DiagnosticOrder') {
						return require('./diagnosticorder.schema.js');
					}
					if (data && data.resourceType === 'MedicationOrder') {
						return require('./medicationorder.schema.js');
					}
					if (data && data.resourceType === 'NutritionOrder') {
						return require('./nutritionorder.schema.js');
					}
					if (data && data.resourceType === 'Order') {
						return require('./order.schema.js');
					}
					if (data && data.resourceType === 'ProcedureRequest') {
						return require('./procedurerequest.schema.js');
					}
					if (data && data.resourceType === 'ProcessRequest') {
						return require('./processrequest.schema.js');
					}
					if (data && data.resourceType === 'ReferralRequest') {
						return require('./referralrequest.schema.js');
					}
					if (data && data.resourceType === 'SupplyRequest') {
						return require('./supplyrequest.schema.js');
					}
					if (data && data.resourceType === 'VisionPrescription') {
						return require('./visionprescription.schema.js');
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
