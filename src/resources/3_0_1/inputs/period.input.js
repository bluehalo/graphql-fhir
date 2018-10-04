const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Period Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Period_Input',
	description: 'Base StructureDefinition for Period Type.',
	fields: () => extendSchema(require('./element.input'), {
		start: {
			type: DateTimeScalar,
			description: 'The start of the period. The boundary is inclusive.'
		},
		_start: {
			type: require('./element.input'),
			description: 'The start of the period. The boundary is inclusive.'
		},
		end: {
			type: DateTimeScalar,
			description: 'The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.'
		},
		_end: {
			type: require('./element.input'),
			description: 'The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.'
		}
	})
});
