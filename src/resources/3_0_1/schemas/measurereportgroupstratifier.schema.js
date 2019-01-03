const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary MeasureReport.group.stratifier Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasureReportGroupStratifier',
	description:
		'When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			identifier: {
				type: require('./identifier.schema'),
				description:
					'The identifier of this stratifier, as defined in the measure definition.',
			},
			stratum: {
				type: new GraphQLList(
					require('./measurereportgroupstratifierstratum.schema'),
				),
				description:
					'This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.',
			},
		}),
});
