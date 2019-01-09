const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary SampledData Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SampledData_Input',
	description: 'Base StructureDefinition for SampledData Type',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		origin: {
			type: new GraphQLNonNull(require('./quantity.input.js')),
			description:
				'The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.',
		},
		_period: {
			type: require('./element.input.js'),
			description:
				'The length of time between sampling times, measured in milliseconds.',
		},
		period: {
			type: new GraphQLNonNull(GraphQLFloat),
			description:
				'The length of time between sampling times, measured in milliseconds.',
		},
		_factor: {
			type: require('./element.input.js'),
			description:
				'A correction factor that is applied to the sampled data points before they are added to the origin.',
		},
		factor: {
			type: GraphQLFloat,
			description:
				'A correction factor that is applied to the sampled data points before they are added to the origin.',
		},
		_lowerLimit: {
			type: require('./element.input.js'),
			description:
				"The lower limit of detection of the measured points. This is needed if any of the data points have the value 'L' (lower than detection limit).",
		},
		lowerLimit: {
			type: GraphQLFloat,
			description:
				"The lower limit of detection of the measured points. This is needed if any of the data points have the value 'L' (lower than detection limit).",
		},
		_upperLimit: {
			type: require('./element.input.js'),
			description:
				"The upper limit of detection of the measured points. This is needed if any of the data points have the value 'U' (higher than detection limit).",
		},
		upperLimit: {
			type: GraphQLFloat,
			description:
				"The upper limit of detection of the measured points. This is needed if any of the data points have the value 'U' (higher than detection limit).",
		},
		_dimensions: {
			type: require('./element.input.js'),
			description:
				'The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.',
		},
		dimensions: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description:
				'The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.',
		},
		_data: {
			type: require('./element.input.js'),
			description:
				"A series of data points which are decimal values separated by a single space (character u20). The special values 'E' (error), 'L' (below detection limit) and 'U' (above detection limit) can also be used in place of a decimal value.",
		},
		data: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				"A series of data points which are decimal values separated by a single space (character u20). The special values 'E' (error), 'L' (below detection limit) and 'U' (above detection limit) can also be used in place of a decimal value.",
		},
	}),
});
