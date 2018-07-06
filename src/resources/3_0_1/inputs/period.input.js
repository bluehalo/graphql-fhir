const {
	GraphQLInputObjectType
} = require('graphql');

const DateTimeScalar = require('../scalars/datetime.scalar');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary Period Fields
 */
let PeriodInput = new GraphQLInputObjectType({
	name: 'PeriodInput',
	description: 'A time period defined by a start and end date and optionally time.',
	fields: () => extendSchema(require('./element.input'), {
		start: {
			type: DateTimeScalar,
			description: 'The start of the period. The boundary is inclusive.'
		},
		_start: {
			type: require('./extension.input'),
			description: 'Extensions for start'
		},
		end: {
			type: DateTimeScalar,
			description: 'The end of the period. If the end of the period is missing, it means that the period is ongoing.'
				+ ' The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.'
		},
		_end: {
			type: require('./extension.input'),
			description: 'Extensions for end'
		}
	})
});

module.exports = PeriodInput;
