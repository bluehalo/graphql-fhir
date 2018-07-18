const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary MeasureReportGroup Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MeasureReportGroup_Input',
	description: 'The results of the calculation, one for each population group in the measure.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: new GraphQLNonNull(require('./identifier.input')),
			description: 'The identifier of the population group as defined in the measure definition.'
		},
		population: {
			type: new GraphQLList(require('./measurereportgrouppopulation.input')),
			description: 'The populations that make up the population group, one for each type of population appropriate for the measure.'
		},
		measureScore: {
			type: GraphQLFloat,
			description: 'The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.'
		},
		_measureScore: {
			type: require('./element.input'),
			description: 'The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.'
		},
		stratifier: {
			type: new GraphQLList(require('./measurereportgroupstratifier.input')),
			description: 'When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.'
		}
	})
});
