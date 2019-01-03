const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLFloat } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary MeasureReport.group.stratifier.stratum Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureReportGroupStratifierStratum',
	description: 'This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value for this stratum, expressed as a string. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.'
		},
		_value: {
			type: require('./element.schema'),
			description: 'The value for this stratum, expressed as a string. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.'
		},
		population: {
			type: new GraphQLList(require('./measurereportgroupstratifierstratumpopulation.schema')),
			description: 'The populations that make up the stratum, one for each type of population appropriate to the measure.'
		},
		measureScore: {
			type: GraphQLFloat,
			description: 'The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.'
		},
		_measureScore: {
			type: require('./element.schema'),
			description: 'The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.'
		}
	})
});
