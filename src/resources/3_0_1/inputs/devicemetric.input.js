const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DeviceMetric Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DeviceMetric_Input',
	description: 'Base StructureDefinition for DeviceMetric Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLNonNull(require('./identifier.input')),
			description: 'Describes the unique identification of this metric that has been assigned by the device or gateway software. For example: handle ID.  It should be noted that in order to make the identifier unique, the system element of the identifier should be set to the unique identifier of the device.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/devicemetric-type
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Describes the type of the metric. For example: Heart Rate, PEEP Setting, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/devicemetric-type
		unit: {
			type: require('./codeableconcept.input'),
			description: 'Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.'
		},
		source: {
			type: require('./reference.input'),
			description: 'Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.'
		},
		parent: {
			type: require('./reference.input'),
			description: 'Describes the link to the  DeviceComponent that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a DeviceComponent that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/metric-operational-status
		operationalStatus: {
			type: CodeScalar,
			description: 'Indicates current operational state of the device. For example: On, Off, Standby, etc.'
		},
		_operationalStatus: {
			type: require('./element.input'),
			description: 'Indicates current operational state of the device. For example: On, Off, Standby, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/metric-color
		color: {
			type: CodeScalar,
			description: 'Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.'
		},
		_color: {
			type: require('./element.input'),
			description: 'Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/metric-category
		category: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.'
		},
		_category: {
			type: require('./element.input'),
			description: 'Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.'
		},
		measurementPeriod: {
			type: require('./timing.input'),
			description: 'Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.'
		},
		calibration: {
			type: new GraphQLList(require('./devicemetriccalibration.input')),
			description: 'Describes the calibrations that have been performed or that are required to be performed.'
		}
	})
});
