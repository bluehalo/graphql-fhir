const {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLFloat
} = require('graphql');

// Scalars
const CodeScalar = require('../scalars/code.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Age Fields
 */
let QuantityInput = new GraphQLInputObjectType({
	name: 'QuantityInput',
	description: 'A time period defined by a start and end date and optionally time.',
	fields: () => extendSchema(require('./element.input'), {
		value: {
			type: GraphQLFloat,
			description: 'The value of the measured amount. The value includes an implicit precision in the presentation of the value.'
		},
		_value: {
			type: require('./extension.input'),
			description: 'Extensions for value'
		},
		comparator: {
			type: GraphQLString,
			description: 'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues;'
				+ ' e.g. if the comparator is \"<\" , then the real value is < stated value.'
		},
		_comparator: {
			type: require('./extension.input'),
			description: 'Extensions for comparator'
		},
		unit: {
			type: GraphQLString,
			description: 'A human-readable form of the unit.'
		},
		_unit: {
			type: require('./extension.input'),
			description: 'Extensions for unit'
		},
		system: {
			type: GraphQLString,
			description: 'The identification of the system that provides the coded form of the unit.'
		},
		_system: {
			type: require('./extension.input'),
			description: 'Extensions for system'
		},
		code: {
			type: CodeScalar,
			description: 'A computer processable form of the unit in some unit representation system.'
		},
		_code: {
			type: require('./extension.input'),
			description: 'Extensions for code'
		}
	})
});

module.exports = QuantityInput;
