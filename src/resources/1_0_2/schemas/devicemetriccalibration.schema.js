const CodeScalar = require('../scalars/code.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DeviceMetricCalibration Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceMetricCalibration',
	description: 'Describes the calibrations that have been performed or that are required to be performed.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/metric-calibration-type
		type: {
			type: CodeScalar,
			description: 'Describes the type of the calibration method.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Describes the type of the calibration method.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/metric-calibration-state
		state: {
			type: CodeScalar,
			description: 'Describes the state of the calibration.'
		},
		_state: {
			type: require('./element.schema'),
			description: 'Describes the state of the calibration.'
		},
		time: {
			type: InstantScalar,
			description: 'Describes the time last calibration has been performed.'
		},
		_time: {
			type: require('./element.schema'),
			description: 'Describes the time last calibration has been performed.'
		}
	})
});
