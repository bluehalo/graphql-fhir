const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Period Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Period',
	description: 'Base StructureDefinition for Period Type.',
	fields: () => extendSchema(require('./element.schema'), {
		start: {
			type: DateTimeScalar,
			description: 'The start of the period. The boundary is inclusive.'
		},
		_start: {
			type: require('./element.schema'),
			description: 'The start of the period. The boundary is inclusive.'
		},
		end: {
			type: DateTimeScalar,
			description: 'The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.'
		},
		_end: {
			type: require('./element.schema'),
			description: 'The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.'
		}
	})
});
