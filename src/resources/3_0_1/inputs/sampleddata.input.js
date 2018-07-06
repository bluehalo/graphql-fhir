const {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLFloat
} = require('graphql');

// Scalars
const PositiveIntScalar = require('../scalars/positiveint.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary SampledData Fields
 */
let SampledDataInput = new GraphQLInputObjectType({
	name: 'SampledDataInput',
	description: 'A set of ordered Quantities defined by a low and high limit.',
	fields: () => extendSchema(require('./element.input'), {
		origin: {
			type: require('./quantity.input'),
			description: 'The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.'
		},
		period: {
			type: GraphQLFloat,
			description: 'The length of time between sampling times, measured in milliseconds.'
		},
		_period: {
			type: require('./extension.input'),
			description: 'Extensions for period'
		},
		factor: {
			type: GraphQLFloat,
			description: 'A correction factor that is applied to the sampled data points before they are added to the origin.'
		},
		_factor: {
			type: require('./extension.input'),
			description: 'Extensions for factor'
		},
		lowerLimit: {
			type: GraphQLFloat,
			description: 'The lower limit of detection of the measured points. This is needed if any of the data points have the value \"L\" (lower than detection limit).'
		},
		_lowerLimit: {
			type: require('./extension.input'),
			description: 'Extensions for lowerLimit'
		},
		upperLimit: {
			type: GraphQLFloat,
			description: 'The upper limit of detection of the measured points. This is needed if any of the data points have the value \"U\" (higher than detection limit).'
		},
		_upperLimit: {
			type: require('./extension.input'),
			description: 'Extensions for upperLimit'
		},
		dimensions: {
			type: PositiveIntScalar,
			description: 'The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.'
		},
		_dimensions: {
			type: require('./extension.input'),
			description: 'Extensions for dimensions'
		},
		data: {
			type: GraphQLString,
			description: 'A series of data points which are decimal values separated by a single space (character u20).'
				+ ' The special values \"E\" (error), \"L\" (below detection limit) and \"U\" (above detection limit) can also be used in place of a decimal value.'
		},
		_data: {
			type: require('./extension.input'),
			description: 'Extensions for data'
		}
	})
});

module.exports = SampledDataInput;
