const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary DeviceMetric Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DeviceMetric_Input',
	description: 'Base StructureDefinition for DeviceMetric Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DeviceMetric_Enum_input',
					values: { DeviceMetric: { value: 'DeviceMetric' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Describes the type of the metric. For example: Heart Rate, PEEP Setting, etc.',
		},
		identifier: {
			type: new GraphQLNonNull(require('./identifier.input.js')),
			description:
				'Describes the unique identification of this metric that has been assigned by the device or gateway software. For example: handle ID.  It should be noted that in order to make the identifier unique, the system element of the identifier should be set to the unique identifier of the device.',
		},
		unit: {
			type: require('./codeableconcept.input.js'),
			description:
				'Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.',
		},
		source: {
			type: GraphQLString,
			description:
				'Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacture, serial number, etc.',
		},
		parent: {
			type: GraphQLString,
			description:
				'Describes the link to the  DeviceComponent that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a DeviceComponent that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.',
		},
		_operationalStatus: {
			type: require('./element.input.js'),
			description:
				'Indicates current operational state of the device. For example: On, Off, Standby, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/metric-operational-status
		operationalStatus: {
			type: CodeScalar,
			description:
				'Indicates current operational state of the device. For example: On, Off, Standby, etc.',
		},
		_color: {
			type: require('./element.input.js'),
			description:
				'Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/metric-color
		color: {
			type: CodeScalar,
			description:
				'Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.',
		},
		_category: {
			type: require('./element.input.js'),
			description:
				'Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/metric-category
		category: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.',
		},
		measurementPeriod: {
			type: require('./timing.input.js'),
			description:
				'Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.',
		},
		calibration: {
			type: new GraphQLList(require('./devicemetriccalibration.input.js')),
			description:
				'Describes the calibrations that have been performed or that are required to be performed.',
		},
	}),
});
