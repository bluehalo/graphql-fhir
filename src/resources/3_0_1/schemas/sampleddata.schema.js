const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLFloat, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary SampledData Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SampledData',
	description: 'Base StructureDefinition for SampledData Type.',
	fields: () => extendSchema(require('./element.schema'), {
		origin: {
			type: new GraphQLNonNull(require('./quantity.schema')),
			description: 'The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.'
		},
		period: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'The length of time between sampling times, measured in milliseconds.'
		},
		_period: {
			type: require('./element.schema'),
			description: 'The length of time between sampling times, measured in milliseconds.'
		},
		factor: {
			type: GraphQLFloat,
			description: 'A correction factor that is applied to the sampled data points before they are added to the origin.'
		},
		_factor: {
			type: require('./element.schema'),
			description: 'A correction factor that is applied to the sampled data points before they are added to the origin.'
		},
		lowerLimit: {
			type: GraphQLFloat,
			description: 'The lower limit of detection of the measured points. This is needed if any of the data points have the value \'L\' (lower than detection limit).'
		},
		_lowerLimit: {
			type: require('./element.schema'),
			description: 'The lower limit of detection of the measured points. This is needed if any of the data points have the value \'L\' (lower than detection limit).'
		},
		upperLimit: {
			type: GraphQLFloat,
			description: 'The upper limit of detection of the measured points. This is needed if any of the data points have the value \'U\' (higher than detection limit).'
		},
		_upperLimit: {
			type: require('./element.schema'),
			description: 'The upper limit of detection of the measured points. This is needed if any of the data points have the value \'U\' (higher than detection limit).'
		},
		dimensions: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.'
		},
		_dimensions: {
			type: require('./element.schema'),
			description: 'The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.'
		},
		data: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A series of data points which are decimal values separated by a single space (character u20). The special values \'E\' (error), \'L\' (below detection limit) and \'U\' (above detection limit) can also be used in place of a decimal value.'
		},
		_data: {
			type: require('./element.schema'),
			description: 'A series of data points which are decimal values separated by a single space (character u20). The special values \'E\' (error), \'L\' (below detection limit) and \'U\' (above detection limit) can also be used in place of a decimal value.'
		}
	})
});
