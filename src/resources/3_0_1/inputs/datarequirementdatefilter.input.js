const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DataRequirement.dateFilter Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DataRequirementDateFilter_Input',
	description: 'Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.',
	fields: () => extendSchema(require('./element.input'), {
		path: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The date-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type dateTime, Period, Schedule, or Timing.'
		},
		_path: {
			type: require('./element.input'),
			description: 'The date-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type dateTime, Period, Schedule, or Timing.'
		},
		valueDateTime: {
			type: DateTimeScalar,
			description: 'The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.'
		},
		_valueDateTime: {
			type: require('./element.input'),
			description: 'The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.'
		},
		valuePeriod: {
			type: require('./period.input'),
			description: 'The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.'
		},
		valueDuration: {
			type: require('./duration.input'),
			description: 'The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.'
		}
	})
});
